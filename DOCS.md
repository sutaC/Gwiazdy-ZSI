## :toolbox: Functions

- [uploadImage](#gear-uploadimage)
- [deleteImage](#gear-deleteimage)
- [getImgById](#gear-getimgbyid)
- [getImgsByTagId](#gear-getimgsbytagid)
- [getNextImg](#gear-getnextimg)
- [getPreviousImg](#gear-getpreviousimg)
- [getRandomImg](#gear-getrandomimg)
- [getRandomUntaggedImg](#gear-getrandomuntaggedimg)
- [addImg](#gear-addimg)
- [updateImg](#gear-updateimg)
- [deleteImgLocal](#gear-deleteimglocal)
- [deleteImgSrc](#gear-deleteimgsrc)
- [deleteImage](#gear-deleteimage)
- [addTag](#gear-addtag)
- [deleteTag](#gear-deletetag)
- [getTags](#gear-gettags)
- [addToTags](#gear-addtotags)
- [updateInTags](#gear-updateintags)
- [deleteFromTags](#gear-deletefromtags)
- [getSelectedTeachers](#gear-getselectedteachers)
- [searchTeachers](#gear-searchteachers)
- [searchUnselectedTeachers](#gear-searchunselectedteachers)
- [getUsers](#gear-getusers)
- [getUser](#gear-getuser)
- [getUserByToken](#gear-getuserbytoken)
- [updateUserToken](#gear-updateusertoken)
- [updateUserPassword](#gear-updateuserpassword)
- [addUser](#gear-adduser)
- [deleteUser](#gear-deleteuser)
- [getImageAmount](#gear-getimageamount)
- [getImageWithTagAmount](#gear-getimagewithtagamount)
- [getImageAmountOnTeachers](#gear-getimageamountonteachers)
- [setScrapedImageAsRejected](#gear-setscrapedimageasrejected)
- [getRandomScrapedImage](#gear-getrandomscrapedimage)
- [getScrapedImageAmount](#gear-getscrapedimageamount)
- [transferScrapedImageToImages](#gear-transferscrapedimagetoimages)
- [deleteScrapedImageBySrc](#gear-deletescrapedimagebysrc)
- [isImagePresent](#gear-isimagepresent)
- [authenticate](#gear-authenticate)
- [authorizePageRootAdmin](#gear-authorizepagerootadmin)
- [authorizeApiRootAdmin](#gear-authorizeapirootadmin)
- [authorizePage](#gear-authorizepage)
- [authorizeApi](#gear-authorizeapi)
- [authorizePageToAdmin](#gear-authorizepagetoadmin)
- [authorizeApiToAdmin](#gear-authorizeapitoadmin)
- [hashString](#gear-hashstring)
- [authenticateUser](#gear-authenticateuser)
- [validatePassword](#gear-validatepassword)
- [trimImageResolution](#gear-trimimageresolution)
- [getMain](#gear-getmain)
- [getStatistics](#gear-getstatistics)
- [getAbout](#gear-getabout)
- [getLogin](#gear-getlogin)
- [postLogin](#gear-postlogin)
- [getAdmin](#gear-getadmin)
- [getLogout](#gear-getlogout)
- [getReset](#gear-getreset)
- [postReset](#gear-postreset)
- [getLogs](#gear-getlogs)
- [deleteLogs](#gear-deletelogs)
- [getUsers](#gear-getusers)
- [postAddAdminUser](#gear-postaddadminuser)
- [deleteDeleteUser](#gear-deletedeleteuser)
- [getImg](#gear-getimg)
- [getImgUpdate](#gear-getimgupdate)
- [deleteImageDeleteLocal](#gear-deleteimagedeletelocal)
- [deleteImageDelete](#gear-deleteimagedelete)
- [postImgUpdate](#gear-postimgupdate)
- [getRandomImg](#gear-getrandomimg)
- [getAddImg](#gear-getaddimg)
- [postApiAddImg](#gear-postapiaddimg)
- [getTags](#gear-gettags)
- [patchUpdateInTags](#gear-patchupdateintags)
- [deleteDeleteFromTags](#gear-deletedeletefromtags)
- [putAddToTags](#gear-putaddtotags)
- [putImgTag](#gear-putimgtag)
- [deleteImgTag](#gear-deleteimgtag)
- [getImgTag](#gear-getimgtag)
- [getTag](#gear-gettag)
- [getImageTaglist](#gear-getimagetaglist)
- [getScraper](#gear-getscraper)
- [postScraperScrape](#gear-postscraperscrape)
- [getScraperStatus](#gear-getscraperstatus)
- [getScraperImage](#gear-getscraperimage)
- [deleteScraperImageId](#gear-deletescraperimageid)
- [postScraperImageId](#gear-postscraperimageid)

### :gear: uploadImage

Uploads file to server

| Function | Type |
| ---------- | ---------- |
| `uploadImage` | `(uploadFile: File) => Promise<string>` |

Parameters:

* `uploadFile`: File to upload


Returns:

New file name

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/upload.ts#L10)

### :gear: deleteImage

Deletes file from server

| Function | Type |
| ---------- | ---------- |
| `deleteImage` | `(filename: string) => Promise<void>` |

Parameters:

* `filename`: Name of file to delete


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/upload.ts#L26)

### :gear: getImgById

Gets image object by id

| Function | Type |
| ---------- | ---------- |
| `getImgById` | `(id: number) => Promise<Image or null>` |

Parameters:

* `id`: Image id


Returns:

Image object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L64)

### :gear: getImgsByTagId

Gets image objects lits by attached tag id

| Function | Type |
| ---------- | ---------- |
| `getImgsByTagId` | `(tagid: number, list: number) => Promise<Image[]>` |

Parameters:

* `id`: Tag id


Returns:

Image objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L78)

### :gear: getNextImg

Gets next image object by of image id

| Function | Type |
| ---------- | ---------- |
| `getNextImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


Returns:

Image object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L98)

### :gear: getPreviousImg

Gets previous image object of current image id

| Function | Type |
| ---------- | ---------- |
| `getPreviousImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


Returns:

Image object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L113)

### :gear: getRandomImg

Gets random image object

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `() => Promise<number or null>` |

Returns:

Image object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L127)

### :gear: getRandomUntaggedImg

Gets random image object

| Function | Type |
| ---------- | ---------- |
| `getRandomUntaggedImg` | `() => Promise<number or null>` |

Returns:

Image object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L140)

### :gear: addImg

Adds image object
- Image object have to have `src` or `local` to be added

| Function | Type |
| ---------- | ---------- |
| `addImg` | `(src?: string or undefined, local?: string or undefined) => Promise<number or null>` |

Parameters:

* `src`: Source web url
* `local`: Name of local file saved on server


Returns:

New image id

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L156)

### :gear: updateImg

Updates image object

| Function | Type |
| ---------- | ---------- |
| `updateImg` | `(id: number, src?: string or undefined, local?: string or undefined) => Promise<void>` |

Parameters:

* `id`: Image id
* `src`: New source web url
* `local`: New name of local file saved on server


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L188)

### :gear: deleteImgLocal

Sets image local as NULL

| Function | Type |
| ---------- | ---------- |
| `deleteImgLocal` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L210)

### :gear: deleteImgSrc

Sets image src as NULL

| Function | Type |
| ---------- | ---------- |
| `deleteImgSrc` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L220)

### :gear: deleteImage

Deletes image object and all its tag relations

| Function | Type |
| ---------- | ---------- |
| `deleteImage` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L230)

### :gear: addTag

Adds tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `addTag` | `(imageId: number, tagId: number) => Promise<Teacher or null>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


Returns:

Tag object

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L244)

### :gear: deleteTag

Removes tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `deleteTag` | `(imageId: number, tagId: number) => Promise<void>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L265)

### :gear: getTags

Gets all tag objects

| Function | Type |
| ---------- | ---------- |
| `getTags` | `() => Promise<Teacher[]>` |

Returns:

Tag objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L279)

### :gear: addToTags

Adds tag object

| Function | Type |
| ---------- | ---------- |
| `addToTags` | `(name: string) => Promise<number or null>` |

Parameters:

* `name`: Tag name


Returns:

New tag id

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L294)

### :gear: updateInTags

Updates tag object

| Function | Type |
| ---------- | ---------- |
| `updateInTags` | `(id: number, name: string) => Promise<void>` |

Parameters:

* `id`: Tag id
* `name`: New tag name


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L310)

### :gear: deleteFromTags

Deletes tag object and all its image relations

| Function | Type |
| ---------- | ---------- |
| `deleteFromTags` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L320)

### :gear: getSelectedTeachers

Returns all tags related to image

| Function | Type |
| ---------- | ---------- |
| `getSelectedTeachers` | `(id: number) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id


Returns:

Tag objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L332)

### :gear: searchTeachers

Searches for tags by name prompt

| Function | Type |
| ---------- | ---------- |
| `searchTeachers` | `(prompt: string) => Promise<Teacher[]>` |

Parameters:

* `prompt`: Tag name prompt


Returns:

Tag objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L348)

### :gear: searchUnselectedTeachers

Searches for tags, by name prompt, that are not related to given image

| Function | Type |
| ---------- | ---------- |
| `searchUnselectedTeachers` | `(imageId: number, prompt: string) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id
* `prompt`: Tag name prompt


Returns:

Tag objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L365)

### :gear: getUsers

Gets all user logins

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `() => Promise<string[]>` |

Returns:

User logins list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L384)

### :gear: getUser

Gets user password

| Function | Type |
| ---------- | ---------- |
| `getUser` | `(login: string) => Promise<string or null>` |

Parameters:

* `login`: User login


Returns:

User password

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L399)

### :gear: getUserByToken

Gets user login by given auth token

| Function | Type |
| ---------- | ---------- |
| `getUserByToken` | `(token: string) => Promise<string or null>` |

Parameters:

* `token`: User auth token


Returns:

User login

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L414)

### :gear: updateUserToken

Updates user auth token

| Function | Type |
| ---------- | ---------- |
| `updateUserToken` | `(login: string, token: string) => Promise<void>` |

Parameters:

* `login`: User login
* `token`: User auth token


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L429)

### :gear: updateUserPassword

Updates users password

| Function | Type |
| ---------- | ---------- |
| `updateUserPassword` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L446)

### :gear: addUser

Adds user

| Function | Type |
| ---------- | ---------- |
| `addUser` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L463)

### :gear: deleteUser

Deletes user

| Function | Type |
| ---------- | ---------- |
| `deleteUser` | `(login: string) => Promise<void>` |

Parameters:

* `login`: User login


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L476)

### :gear: getImageAmount

Gets amount of images

| Function | Type |
| ---------- | ---------- |
| `getImageAmount` | `() => Promise<number or null>` |

Returns:

Amount of images

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L487)

### :gear: getImageWithTagAmount

Gets amount of images grouped by tags

| Function | Type |
| ---------- | ---------- |
| `getImageWithTagAmount` | `() => Promise<number or null>` |

Returns:

Amount of images grouped by tags

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L500)

### :gear: getImageAmountOnTeachers

Gets tags with amount of related images order descendly

| Function | Type |
| ---------- | ---------- |
| `getImageAmountOnTeachers` | `() => Promise<TeacherCount[]>` |

Returns:

Tag amount objects list

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L513)

### :gear: setScrapedImageAsRejected

Sets scraped image status as rejected

| Function | Type |
| ---------- | ---------- |
| `setScrapedImageAsRejected` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Scraped image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L583)

### :gear: getRandomScrapedImage

Gets random scraped image which is not rejected

| Function | Type |
| ---------- | ---------- |
| `getRandomScrapedImage` | `() => Promise<ScrapedImage or null>` |

Returns:

Random scraped image or null if not present

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L595)

### :gear: getScrapedImageAmount

Gets number of not rejected scraped images

| Function | Type |
| ---------- | ---------- |
| `getScrapedImageAmount` | `() => Promise<number>` |

Returns:

Number of not rejected scraped images

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L608)

### :gear: transferScrapedImageToImages

Sets scraped image status as rejected

| Function | Type |
| ---------- | ---------- |
| `transferScrapedImageToImages` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Scraped image id


Returns:

Id of image in `images` table or null when image could not be added

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L622)

### :gear: deleteScrapedImageBySrc

Deletes from sraped image by src

| Function | Type |
| ---------- | ---------- |
| `deleteScrapedImageBySrc` | `(src: string) => Promise<void>` |

Parameters:

* `src`: Scraped image src


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L649)

### :gear: isImagePresent

Check if image url is present in `images` table

| Function | Type |
| ---------- | ---------- |
| `isImagePresent` | `(src: string) => Promise<boolean>` |

Parameters:

* `src`: Image url


Returns:

True if url is present in db

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L660)

### :gear: authenticate

Middleweare for user authentication. Attaches `authorized` token to given request.

| Function | Type |
| ---------- | ---------- |
| `authenticate` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L15)

### :gear: authorizePageRootAdmin

Middleweare for user authorization only for `root admin`.

| Function | Type |
| ---------- | ---------- |
| `authorizePageRootAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If unauthorized send 401 code and renders error page.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L52)

### :gear: authorizeApiRootAdmin

Middleweare for user authorization only for `root admin` on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApiRootAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If unauthorized send 401 code.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L68)

### :gear: authorizePage

Middleweare for user authorization.

| Function | Type |
| ---------- | ---------- |
| `authorizePage` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If unauthorized send 401 code and renders error page.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L84)

### :gear: authorizeApi

Middleweare for user authorization on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApi` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If unauthorized send 401 code.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L100)

### :gear: authorizePageToAdmin

Middleweare for user redirection if authorized.

| Function | Type |
| ---------- | ---------- |
| `authorizePageToAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If authorized redirects to `/admin`.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L116)

### :gear: authorizeApiToAdmin

Middleweare for user redirection if authorized on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApiToAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

Returns:

If authorized redirects to `/admin` on client end.

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L132)

### :gear: hashString

Hashes given string.

| Function | Type |
| ---------- | ---------- |
| `hashString` | `(string: string) => string` |

Parameters:

* `string`: Value to be hashed


Returns:

Hashed value

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L152)

### :gear: authenticateUser

Authenticates user by given credentials.

| Function | Type |
| ---------- | ---------- |
| `authenticateUser` | `(login: string, password: string) => Promise<string or null>` |

Parameters:

* `login`: User login
* `password`: User password


Returns:

`null` or error message if error appears

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L163)

### :gear: validatePassword

Validates user password. Checks if:
- is present
- is at least 8 characters long
- does it have a lowercase letter
- does it have a biggercase letter
- does it have a number
- does it have a special symbol (`!@#$%,.?:;`)

| Function | Type |
| ---------- | ---------- |
| `validatePassword` | `(password?: string or undefined) => string or null` |

Parameters:

* `password`: User password


Returns:

`null` or error message if error appears

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L185)

### :gear: trimImageResolution

Removes resolution annotation from url

| Function | Type |
| ---------- | ---------- |
| `trimImageResolution` | `(url: string) => string` |

Parameters:

* `url`: Image url


Returns:

Trimed url

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L312)

### :gear: getMain

| Function | Type |
| ---------- | ---------- |
| `getMain` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L14)

### :gear: getStatistics

| Function | Type |
| ---------- | ---------- |
| `getStatistics` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L26)

### :gear: getAbout

| Function | Type |
| ---------- | ---------- |
| `getAbout` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L42)

### :gear: getLogin

| Function | Type |
| ---------- | ---------- |
| `getLogin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L47)

### :gear: postLogin

| Function | Type |
| ---------- | ---------- |
| `postLogin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L51)

### :gear: getAdmin

| Function | Type |
| ---------- | ---------- |
| `getAdmin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L76)

### :gear: getLogout

| Function | Type |
| ---------- | ---------- |
| `getLogout` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L84)

### :gear: getReset

| Function | Type |
| ---------- | ---------- |
| `getReset` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L96)

### :gear: postReset

| Function | Type |
| ---------- | ---------- |
| `postReset` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L100)

### :gear: getLogs

| Function | Type |
| ---------- | ---------- |
| `getLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L127)

### :gear: deleteLogs

| Function | Type |
| ---------- | ---------- |
| `deleteLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L157)

### :gear: getUsers

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L173)

### :gear: postAddAdminUser

| Function | Type |
| ---------- | ---------- |
| `postAddAdminUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L178)

### :gear: deleteDeleteUser

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L220)

### :gear: getImg

| Function | Type |
| ---------- | ---------- |
| `getImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L244)

### :gear: getImgUpdate

| Function | Type |
| ---------- | ---------- |
| `getImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L270)

### :gear: deleteImageDeleteLocal

| Function | Type |
| ---------- | ---------- |
| `deleteImageDeleteLocal` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L295)

### :gear: deleteImageDelete

| Function | Type |
| ---------- | ---------- |
| `deleteImageDelete` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L323)

### :gear: postImgUpdate

| Function | Type |
| ---------- | ---------- |
| `postImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L348)

### :gear: getRandomImg

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L409)

### :gear: getAddImg

| Function | Type |
| ---------- | ---------- |
| `getAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L426)

### :gear: postApiAddImg

| Function | Type |
| ---------- | ---------- |
| `postApiAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L430)

### :gear: getTags

| Function | Type |
| ---------- | ---------- |
| `getTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L478)

### :gear: patchUpdateInTags

| Function | Type |
| ---------- | ---------- |
| `patchUpdateInTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L483)

### :gear: deleteDeleteFromTags

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteFromTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L500)

### :gear: putAddToTags

| Function | Type |
| ---------- | ---------- |
| `putAddToTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L514)

### :gear: putImgTag

| Function | Type |
| ---------- | ---------- |
| `putImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L530)

### :gear: deleteImgTag

| Function | Type |
| ---------- | ---------- |
| `deleteImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L550)

### :gear: getImgTag

| Function | Type |
| ---------- | ---------- |
| `getImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L564)

### :gear: getTag

| Function | Type |
| ---------- | ---------- |
| `getTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L584)

### :gear: getImageTaglist

| Function | Type |
| ---------- | ---------- |
| `getImageTaglist` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L594)

### :gear: getScraper

| Function | Type |
| ---------- | ---------- |
| `getScraper` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L619)

### :gear: postScraperScrape

| Function | Type |
| ---------- | ---------- |
| `postScraperScrape` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L636)

### :gear: getScraperStatus

| Function | Type |
| ---------- | ---------- |
| `getScraperStatus` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L655)

### :gear: getScraperImage

| Function | Type |
| ---------- | ---------- |
| `getScraperImage` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L669)

### :gear: deleteScraperImageId

| Function | Type |
| ---------- | ---------- |
| `deleteScraperImageId` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L685)

### :gear: postScraperImageId

| Function | Type |
| ---------- | ---------- |
| `postScraperImageId` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L698)


## :wrench: Constants

- [ROOT_PATH](#gear-root_path)
- [LOGS_PATH](#gear-logs_path)
- [SCRAPERSAVE_PATH](#gear-scrapersave_path)
- [STATIC_PATH](#gear-static_path)
- [VIEWS_PATH](#gear-views_path)
- [UPLOADS_PATH](#gear-uploads_path)
- [scraper](#gear-scraper)

### :gear: ROOT_PATH

| Constant | Type |
| ---------- | ---------- |
| `ROOT_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L4)

### :gear: LOGS_PATH

| Constant | Type |
| ---------- | ---------- |
| `LOGS_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L8)

### :gear: SCRAPERSAVE_PATH

| Constant | Type |
| ---------- | ---------- |
| `SCRAPERSAVE_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L9)

### :gear: STATIC_PATH

| Constant | Type |
| ---------- | ---------- |
| `STATIC_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L10)

### :gear: VIEWS_PATH

| Constant | Type |
| ---------- | ---------- |
| `VIEWS_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L11)

### :gear: UPLOADS_PATH

| Constant | Type |
| ---------- | ---------- |
| `UPLOADS_PATH` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/globals.ts#L12)

### :gear: scraper

| Constant | Type |
| ---------- | ---------- |
| `scraper` | `Scraper` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/app.ts#L21)


## :factory: ScrapedImagesHandler

Allows for quick single-connection handling of scraped images

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L526)

### Methods

- [connect](#gear-connect)
- [disconnect](#gear-disconnect)
- [isSrcPresent](#gear-issrcpresent)
- [addScrapedImage](#gear-addscrapedimage)

#### :gear: connect

Connects handler to db
> **You have to connect to db before using db queries!**

| Method | Type |
| ---------- | ---------- |
| `connect` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L536)

#### :gear: disconnect

Disconnects from db
> **You should always disconnect from db when finished using handler!**

| Method | Type |
| ---------- | ---------- |
| `disconnect` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L545)

#### :gear: isSrcPresent

Check if image url is present in `scrapedimages` table or `images` table

| Method | Type |
| ---------- | ---------- |
| `isSrcPresent` | `(src: string) => Promise<boolean>` |

Parameters:

* `src`: Image url


Returns:

True if url is present in db

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L555)

#### :gear: addScrapedImage

Adds scraped image

| Method | Type |
| ---------- | ---------- |
| `addScrapedImage` | `(src: string) => Promise<void>` |

Parameters:

* `src`: Source url for scraped image


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L569)

## :factory: default

Logging static class

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L8)

### Static Methods

- [info](#gear-info)
- [warning](#gear-warning)
- [error](#gear-error)
- [clear](#gear-clear)

#### :gear: info

Saves to log given message with tag INFO

| Method | Type |
| ---------- | ---------- |
| `info` | `(message: string) => Promise<void>` |

Parameters:

* `message`: Message to log


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L25)

#### :gear: warning

Saves to log given message with tag WARNING

| Method | Type |
| ---------- | ---------- |
| `warning` | `(message: string) => Promise<void>` |

Parameters:

* `message`: Message to log


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L33)

#### :gear: error

Saves to log given message with tag ERROR

| Method | Type |
| ---------- | ---------- |
| `error` | `(message: string) => Promise<void>` |

Parameters:

* `message`: Message to log


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L41)

#### :gear: clear

Deletes all saved logs

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L48)

## :factory: default

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L7)

### Methods

- [run](#gear-run)
- [isRunning](#gear-isrunning)
- [getLastResults](#gear-getlastresults)
- [autoScrapingJob](#gear-autoscrapingjob)

#### :gear: run

Creates job of async scraping image urls from `www.zsi.kielce.pl`. Onlu one jon can be running.

| Method | Type |
| ---------- | ---------- |
| `run` | `(limit?: number, type?: "manual" or "auto") => Promise<void>` |

Parameters:

* `limit`: Limit of read article pages (If unset scrapes all pages)
* `type`: Type of scraping ('manual' or 'auto')


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L30)

#### :gear: isRunning

Is scraping job currently running

| Method | Type |
| ---------- | ---------- |
| `isRunning` | `() => boolean` |

Returns:

True if job is running

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L58)

#### :gear: getLastResults

Gets results of last scraping job

| Method | Type |
| ---------- | ---------- |
| `getLastResults` | `() => Promise<{ type: string; added: number; found: number; limit: number; cachedSkip: number; timeElapsed: number; }>` |

Returns:

Results of last scraping job

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L66)

#### :gear: autoScrapingJob

| Method | Type |
| ---------- | ---------- |
| `autoScrapingJob` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Scraper.ts#L79)

## :tropical_drink: Interfaces

- [Image](#gear-image)
- [Teacher](#gear-teacher)
- [TeacherCount](#gear-teachercount)
- [ScrapedImage](#gear-scrapedimage)
- [Request](#gear-request)

### :gear: Image

Image object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `id` | `number` |  |
| `src` | `string` |  |
| `local` | `string` |  |


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L10)

### :gear: Teacher

Tag object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `id` | `number` |  |
| `name` | `string` |  |


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L21)

### :gear: TeacherCount

Tag count object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `name` | `string` |  |
| `amount` | `number` |  |


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L31)

### :gear: ScrapedImage

Scraped image object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `id` | `number` |  |
| `src` | `string` |  |


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L41)

### :gear: Request



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `authorized` | `string or null` |  |


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L7)
