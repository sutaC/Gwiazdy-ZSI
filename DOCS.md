## :toolbox: Functions

- [getImgById](#gear-getimgbyid)
- [getImgsByTagId](#gear-getimgsbytagid)
- [getNextImg](#gear-getnextimg)
- [getPreviousImg](#gear-getpreviousimg)
- [getRandomImg](#gear-getrandomimg)
- [getRandomUntaggedImg](#gear-getrandomuntaggedimg)
- [addImg](#gear-addimg)
- [updateImg](#gear-updateimg)
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
- [trimImageResolution](#gear-trimimageresolution)
- [uploadImage](#gear-uploadimage)
- [deleteImage](#gear-deleteimage)
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
- [getRoot](#gear-getroot)
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

### :gear: getImgById

Gets image object by id

| Function | Type |
| ---------- | ---------- |
| `getImgById` | `(id: number) => Promise<Image or null>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L64)

### :gear: getImgsByTagId

Gets image objects lits by attached tag id

| Function | Type |
| ---------- | ---------- |
| `getImgsByTagId` | `(tagid: number, list: number) => Promise<Image[]>` |

Parameters:

* `id`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L78)

### :gear: getNextImg

Gets next image object by of image id

| Function | Type |
| ---------- | ---------- |
| `getNextImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L98)

### :gear: getPreviousImg

Gets previous image object of current image id

| Function | Type |
| ---------- | ---------- |
| `getPreviousImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L113)

### :gear: getRandomImg

Gets random image object

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L127)

### :gear: getRandomUntaggedImg

Gets random image object

| Function | Type |
| ---------- | ---------- |
| `getRandomUntaggedImg` | `() => Promise<number or null>` |

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


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L156)

### :gear: updateImg

Updates image object

| Function | Type |
| ---------- | ---------- |
| `updateImg` | `(id: number, src: string, local: string) => Promise<void>` |

Parameters:

* `id`: Image id
* `src`: New source web url
* `local`: New name of local file saved on server


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L188)

### :gear: deleteImage

Deletes image object and all its tag relations

| Function | Type |
| ---------- | ---------- |
| `deleteImage` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L206)

### :gear: addTag

Adds tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `addTag` | `(imageId: number, tagId: number) => Promise<Teacher or null>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L220)

### :gear: deleteTag

Removes tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `deleteTag` | `(imageId: number, tagId: number) => Promise<void>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L241)

### :gear: getTags

Gets all tag objects

| Function | Type |
| ---------- | ---------- |
| `getTags` | `() => Promise<Teacher[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L255)

### :gear: addToTags

Adds tag object

| Function | Type |
| ---------- | ---------- |
| `addToTags` | `(name: string) => Promise<number or null>` |

Parameters:

* `name`: Tag name


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L270)

### :gear: updateInTags

Updates tag object

| Function | Type |
| ---------- | ---------- |
| `updateInTags` | `(id: number, name: string) => Promise<void>` |

Parameters:

* `id`: Tag id
* `name`: New tag name


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L286)

### :gear: deleteFromTags

Deletes tag object and all its image relations

| Function | Type |
| ---------- | ---------- |
| `deleteFromTags` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L296)

### :gear: getSelectedTeachers

Returns all tags related to image

| Function | Type |
| ---------- | ---------- |
| `getSelectedTeachers` | `(id: number) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L308)

### :gear: searchTeachers

Searches for tags by name prompt

| Function | Type |
| ---------- | ---------- |
| `searchTeachers` | `(prompt: string) => Promise<Teacher[]>` |

Parameters:

* `prompt`: Tag name prompt


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L324)

### :gear: searchUnselectedTeachers

Searches for tags, by name prompt, that are not related to given image

| Function | Type |
| ---------- | ---------- |
| `searchUnselectedTeachers` | `(imageId: number, prompt: string) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id
* `prompt`: Tag name prompt


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L341)

### :gear: getUsers

Gets all user logins

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `() => Promise<string[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L360)

### :gear: getUser

Gets user password

| Function | Type |
| ---------- | ---------- |
| `getUser` | `(login: string) => Promise<string or null>` |

Parameters:

* `login`: User login


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L375)

### :gear: getUserByToken

Gets user login by given auth token

| Function | Type |
| ---------- | ---------- |
| `getUserByToken` | `(token: string) => Promise<string or null>` |

Parameters:

* `token`: User auth token


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L390)

### :gear: updateUserToken

Updates user auth token

| Function | Type |
| ---------- | ---------- |
| `updateUserToken` | `(login: string, token: string) => Promise<void>` |

Parameters:

* `login`: User login
* `token`: User auth token


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L405)

### :gear: updateUserPassword

Updates users password

| Function | Type |
| ---------- | ---------- |
| `updateUserPassword` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L422)

### :gear: addUser

Adds user

| Function | Type |
| ---------- | ---------- |
| `addUser` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L439)

### :gear: deleteUser

Deletes user

| Function | Type |
| ---------- | ---------- |
| `deleteUser` | `(login: string) => Promise<void>` |

Parameters:

* `login`: User login


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L452)

### :gear: getImageAmount

Gets amount of images

| Function | Type |
| ---------- | ---------- |
| `getImageAmount` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L463)

### :gear: getImageWithTagAmount

Gets amount of images grouped by tags

| Function | Type |
| ---------- | ---------- |
| `getImageWithTagAmount` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L476)

### :gear: getImageAmountOnTeachers

Gets tags with amount of related images order descendly

| Function | Type |
| ---------- | ---------- |
| `getImageAmountOnTeachers` | `() => Promise<TeacherCount[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L489)

### :gear: setScrapedImageAsRejected

Sets scraped image status as rejected

| Function | Type |
| ---------- | ---------- |
| `setScrapedImageAsRejected` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Scraped image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L559)

### :gear: getRandomScrapedImage

Gets random scraped image which is not rejected

| Function | Type |
| ---------- | ---------- |
| `getRandomScrapedImage` | `() => Promise<ScrapedImage or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L571)

### :gear: getScrapedImageAmount

Gets number of not rejected scraped images

| Function | Type |
| ---------- | ---------- |
| `getScrapedImageAmount` | `() => Promise<number>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L584)

### :gear: transferScrapedImageToImages

Sets scraped image status as rejected

| Function | Type |
| ---------- | ---------- |
| `transferScrapedImageToImages` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Scraped image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L598)

### :gear: deleteScrapedImageBySrc

Deletes from sraped image by src

| Function | Type |
| ---------- | ---------- |
| `deleteScrapedImageBySrc` | `(src: string) => Promise<void>` |

Parameters:

* `src`: Scraped image src


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L625)

### :gear: isImagePresent

Check if image url is present in `images` table

| Function | Type |
| ---------- | ---------- |
| `isImagePresent` | `(src: string) => Promise<boolean>` |

Parameters:

* `src`: Image url


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L636)

### :gear: trimImageResolution

Removes resolution annotation from url

| Function | Type |
| ---------- | ---------- |
| `trimImageResolution` | `(url: string) => string` |

Parameters:

* `url`: Image url


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L328)

### :gear: uploadImage

Uploads file to server

| Function | Type |
| ---------- | ---------- |
| `uploadImage` | `(uploadFile: File) => string` |

Parameters:

* `uploadFile`: File to upload


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/upload.ts#L8)

### :gear: deleteImage

Deletes file from server

| Function | Type |
| ---------- | ---------- |
| `deleteImage` | `(filename: string) => void` |

Parameters:

* `filename`: Name of file to delete


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/upload.ts#L18)

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

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L52)

### :gear: authorizeApiRootAdmin

Middleweare for user authorization only for `root admin` on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApiRootAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L68)

### :gear: authorizePage

Middleweare for user authorization.

| Function | Type |
| ---------- | ---------- |
| `authorizePage` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L84)

### :gear: authorizeApi

Middleweare for user authorization on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApi` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L100)

### :gear: authorizePageToAdmin

Middleweare for user redirection if authorized.

| Function | Type |
| ---------- | ---------- |
| `authorizePageToAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L116)

### :gear: authorizeApiToAdmin

Middleweare for user redirection if authorized on api route.

| Function | Type |
| ---------- | ---------- |
| `authorizeApiToAdmin` | `(req: Request, res: Response<any, Record<string, any>>, next: () => void) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L132)

### :gear: hashString

Hashes given string.

| Function | Type |
| ---------- | ---------- |
| `hashString` | `(string: string) => string` |

Parameters:

* `string`: Value to be hashed


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L152)

### :gear: authenticateUser

Authenticates user by given credentials.

| Function | Type |
| ---------- | ---------- |
| `authenticateUser` | `(login: string, password: string) => Promise<string or null>` |

Parameters:

* `login`: User login
* `password`: User password


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


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/auth.ts#L185)

### :gear: getRoot

| Function | Type |
| ---------- | ---------- |
| `getRoot` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

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

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L54)

### :gear: postLogin

| Function | Type |
| ---------- | ---------- |
| `postLogin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L58)

### :gear: getAdmin

| Function | Type |
| ---------- | ---------- |
| `getAdmin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L80)

### :gear: getLogout

| Function | Type |
| ---------- | ---------- |
| `getLogout` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L88)

### :gear: getReset

| Function | Type |
| ---------- | ---------- |
| `getReset` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L100)

### :gear: postReset

| Function | Type |
| ---------- | ---------- |
| `postReset` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L104)

### :gear: getLogs

| Function | Type |
| ---------- | ---------- |
| `getLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L131)

### :gear: deleteLogs

| Function | Type |
| ---------- | ---------- |
| `deleteLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L163)

### :gear: getUsers

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L181)

### :gear: postAddAdminUser

| Function | Type |
| ---------- | ---------- |
| `postAddAdminUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L186)

### :gear: deleteDeleteUser

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L228)

### :gear: getImg

| Function | Type |
| ---------- | ---------- |
| `getImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L252)

### :gear: getImgUpdate

| Function | Type |
| ---------- | ---------- |
| `getImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L278)

### :gear: deleteImageDelete

| Function | Type |
| ---------- | ---------- |
| `deleteImageDelete` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L303)

### :gear: postImgUpdate

| Function | Type |
| ---------- | ---------- |
| `postImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L330)

### :gear: getRandomImg

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L363)

### :gear: getAddImg

| Function | Type |
| ---------- | ---------- |
| `getAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L380)

### :gear: postApiAddImg

| Function | Type |
| ---------- | ---------- |
| `postApiAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L384)

### :gear: getTags

| Function | Type |
| ---------- | ---------- |
| `getTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L432)

### :gear: patchUpdateInTags

| Function | Type |
| ---------- | ---------- |
| `patchUpdateInTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L437)

### :gear: deleteDeleteFromTags

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteFromTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L454)

### :gear: putAddToTags

| Function | Type |
| ---------- | ---------- |
| `putAddToTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L468)

### :gear: putImgTag

| Function | Type |
| ---------- | ---------- |
| `putImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L484)

### :gear: deleteImgTag

| Function | Type |
| ---------- | ---------- |
| `deleteImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L504)

### :gear: getImgTag

| Function | Type |
| ---------- | ---------- |
| `getImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L518)

### :gear: getTag

| Function | Type |
| ---------- | ---------- |
| `getTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L538)

### :gear: getImageTaglist

| Function | Type |
| ---------- | ---------- |
| `getImageTaglist` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L548)

### :gear: getScraper

| Function | Type |
| ---------- | ---------- |
| `getScraper` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L573)

### :gear: postScraperScrape

| Function | Type |
| ---------- | ---------- |
| `postScraperScrape` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L590)

### :gear: getScraperStatus

| Function | Type |
| ---------- | ---------- |
| `getScraperStatus` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L609)

### :gear: getScraperImage

| Function | Type |
| ---------- | ---------- |
| `getScraperImage` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L623)

### :gear: deleteScraperImageId

| Function | Type |
| ---------- | ---------- |
| `deleteScraperImageId` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L639)

### :gear: postScraperImageId

| Function | Type |
| ---------- | ---------- |
| `postScraperImageId` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L652)


## :wrench: Constants

- [directory](#gear-directory)
- [scraper](#gear-scraper)

### :gear: directory

Root directory of project

| Constant | Type |
| ---------- | ---------- |
| `directory` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/app.ts#L31)

### :gear: scraper

| Constant | Type |
| ---------- | ---------- |
| `scraper` | `Scraper` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/app.ts#L39)


## :factory: default

Logging static class

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L6)

### Methods

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

### Properties

- [LOGFILE](#gear-logfile)

#### :gear: LOGFILE

| Property | Type |
| ---------- | ---------- |
| `LOGFILE` | `"logs.log"` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L7)

## :factory: ScrapedImagesHandler

Allows for quick single-connection handling of scraped images

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L502)

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

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L512)

#### :gear: disconnect

Disconnects from db
> **You should always disconnect from db when finished using handler!**

| Method | Type |
| ---------- | ---------- |
| `disconnect` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L521)

#### :gear: isSrcPresent

Check if image url is present in `scrapedimages` table or `images` table

| Method | Type |
| ---------- | ---------- |
| `isSrcPresent` | `(src: string) => Promise<boolean>` |

Parameters:

* `src`: Image url


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L531)

#### :gear: addScrapedImage

Adds scraped image

| Method | Type |
| ---------- | ---------- |
| `addScrapedImage` | `(src: string) => Promise<void>` |

Parameters:

* `src`: Source url for scraped image


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L545)

## :factory: default

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L8)

### Methods

- [run](#gear-run)
- [setAutoScraping](#gear-setautoscraping)
- [clearAutoScraping](#gear-clearautoscraping)
- [isRunning](#gear-isrunning)
- [getLastResults](#gear-getlastresults)

#### :gear: run

Creates job of async scraping image urls from `www.zsi.kielce.pl`. Onlu one jon can be running.

| Method | Type |
| ---------- | ---------- |
| `run` | `(limit?: number or undefined) => Promise<void>` |

Parameters:

* `limit`: Limit of read article pages (If unset scrapes all pages)


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L30)

#### :gear: setAutoScraping

Sets automatic scraping

| Method | Type |
| ---------- | ---------- |
| `setAutoScraping` | `(interval: number) => void` |

Parameters:

* `interval`: Interval of automatic scraping in ms


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L51)

#### :gear: clearAutoScraping

Clears automatic scraping

| Method | Type |
| ---------- | ---------- |
| `clearAutoScraping` | `() => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L89)

#### :gear: isRunning

Is scraping job currently running

| Method | Type |
| ---------- | ---------- |
| `isRunning` | `() => boolean` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L98)

#### :gear: getLastResults

Gets results of last scraping job

| Method | Type |
| ---------- | ---------- |
| `getLastResults` | `() => { limit: number; found: number; added: number; type: string; nextAutoScraping: number; }` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/scraper.ts#L106)

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


### :gear: Teacher

Tag object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `id` | `number` |  |
| `name` | `string` |  |


### :gear: TeacherCount

Tag count object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `name` | `string` |  |
| `amount` | `number` |  |


### :gear: ScrapedImage

Scraped image object interface

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `id` | `number` |  |
| `src` | `string` |  |


### :gear: Request



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `authorized` | `string or null` |  |

