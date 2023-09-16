-- Get image
SELECT * FROM images LIMIT ?, 1;
-- Get images quantity
SELECT COUNT(*) FROM images;

-- Add tag relation
INSERT INTO imagesteachers (id, id_images, id_teachers) VALUES (NULL, ?, ?);
-- Get tag relation
SELECT * FROM teachers WHERE id = ?;
-- Delete tag relation
DELETE FROM imagesteachers WHERE id_images = ? AND id_teachers = ?;

-- Get teachers
SELECT * FROM teachers;
-- Get teachers with image relation
SELECT      teachers.* 
FROM        images 
LEFT JOIN   imagesteachers      ON images.id = imagesteachers.id_images 
LEFT JOIN   teachers            ON imagesteachers.id_teachers = teachers.id 
WHERE       images.id = ?;
-- Search teachers with prompt excluding ones related with image
SELECT      * 
FROM        teachers 
WHERE       name LIKE CONCAT("%", ?, "%") 
GROUP BY    id 
HAVING      NOT id IN ( 
                SELECT  teachers.id 
                FROM    teachers 
                JOIN    imagesteachers ON teachers.id = imagesteachers.id_teachers 
                WHERE   imagesteachers.id_images = ? 
            ) 
LIMIT 5;