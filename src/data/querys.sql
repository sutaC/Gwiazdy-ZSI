-- Get image by id
SELECT * FROM images WHERE id = ?;
-- Add image
INSERT INTO images (id, src, local) VALUES (NULL, ?, ?);
-- Update image
UPDATE images SET src = ?, local = ? WHERE id = ?;
-- Delete image
DELETE FROM images WHERE id = ?;
-- Get image by local
SELECT id FROM images WHERE local = ?;
-- Get image by src
SELECT id FROM images WHERE src = ?;
-- Get random image id
SELECT id FROM images ORDER BY RAND() LIMIT 1;
-- Get next image id
SELECT id FROM images WHERE id > ? LIMIT 1;
-- Get previous image id
SELECT id FROM images WHERE id < ? ORDER BY id DESC LIMIT 1;
-- Get images with teacher relation;
SELECT images.* FROM images JOIN imagesteachers ON images.id = imagesteachers.id_images WHERE imagesteachers.id_teachers = ? LIMIT ?, 5;

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
-- Search teachers with prompt
SELECT      * 
FROM        teachers 
WHERE       name LIKE CONCAT("%", ?, "%") 
LIMIT 3;
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
LIMIT 3;

-- Get users
SELECT login FROM users;
-- Get user
SELECT password FROM users WHERE login = ?;
-- Get user login by token
SELECT login FROM users WHERE token = ?;
-- Update user token
UPDATE users SET token = ? WHERE login = ?;
-- Update user token
UPDATE users SET password = ? WHERE login = ?;
-- Add user
INSERT INTO users (id, login, password, token) VALUES (NULL, ?, ?, NULL);
-- Delete user
DELETE FROM users WHERE login = ?;

-- Get ammount of teacher with images
SELECT teachers.name, COUNT(imagesteachers.id_teachers) AS "ammount" FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers GROUP BY imagesteachers.id_teachers ORDER BY ammount DESC;