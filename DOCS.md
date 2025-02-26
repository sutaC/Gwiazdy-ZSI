## :toolbox: Functions

- [getImgById](#gear-getimgbyid)
- [getImgsByTagId](#gear-getimgsbytagid)
- [getNextImg](#gear-getnextimg)
- [getPreviousImg](#gear-getpreviousimg)
- [getRandomImg](#gear-getrandomimg)
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
- [getImageAmmount](#gear-getimageammount)
- [getImageWithTagAmmount](#gear-getimagewithtagammount)
- [getImageAmmountOnTeachers](#gear-getimageammountonteachers)
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

### :gear: getImgById

Gets image object by id

| Function | Type |
| ---------- | ---------- |
| `getImgById` | `(id: number) => Promise<Image or null>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L54)

### :gear: getImgsByTagId

Gets image objects lits by attached tag id

| Function | Type |
| ---------- | ---------- |
| `getImgsByTagId` | `(tagid: number, list: number) => Promise<Image[]>` |

Parameters:

* `id`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L68)

### :gear: getNextImg

Gets next image object by of image id

| Function | Type |
| ---------- | ---------- |
| `getNextImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L88)

### :gear: getPreviousImg

Gets previous image object of current image id

| Function | Type |
| ---------- | ---------- |
| `getPreviousImg` | `(id: number) => Promise<number or null>` |

Parameters:

* `id`: Current image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L103)

### :gear: getRandomImg

Gets random image object

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L117)

### :gear: addImg

Adds image object
- Image object have to have `src` or `local` to be added

| Function | Type |
| ---------- | ---------- |
| `addImg` | `(src?: string or undefined, local?: string or undefined) => Promise<number or null>` |

Parameters:

* `src`: Source web url
* `local`: Name of local file saved on server


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L133)

### :gear: updateImg

Updates image object

| Function | Type |
| ---------- | ---------- |
| `updateImg` | `(id: number, src: string, local: string) => Promise<void>` |

Parameters:

* `id`: Image id
* `src`: New source web url
* `local`: New name of local file saved on server


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L165)

### :gear: deleteImage

Deletes image object and all its tag relations

| Function | Type |
| ---------- | ---------- |
| `deleteImage` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L183)

### :gear: addTag

Adds tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `addTag` | `(imageId: number, tagId: number) => Promise<Teacher or null>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L197)

### :gear: deleteTag

Removes tag relation to given image

| Function | Type |
| ---------- | ---------- |
| `deleteTag` | `(imageId: number, tagId: number) => Promise<void>` |

Parameters:

* `imageId`: Image id
* `tagId`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L218)

### :gear: getTags

Gets all tag objects

| Function | Type |
| ---------- | ---------- |
| `getTags` | `() => Promise<Teacher[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L232)

### :gear: addToTags

Adds tag object

| Function | Type |
| ---------- | ---------- |
| `addToTags` | `(name: string) => Promise<number or null>` |

Parameters:

* `name`: Tag name


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L247)

### :gear: updateInTags

Updates tag object

| Function | Type |
| ---------- | ---------- |
| `updateInTags` | `(id: number, name: string) => Promise<void>` |

Parameters:

* `id`: Tag id
* `name`: New tag name


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L263)

### :gear: deleteFromTags

Deletes tag object and all its image relations

| Function | Type |
| ---------- | ---------- |
| `deleteFromTags` | `(id: number) => Promise<void>` |

Parameters:

* `id`: Tag id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L273)

### :gear: getSelectedTeachers

Returns all tags related to image

| Function | Type |
| ---------- | ---------- |
| `getSelectedTeachers` | `(id: number) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L285)

### :gear: searchTeachers

Searches for tags by name prompt

| Function | Type |
| ---------- | ---------- |
| `searchTeachers` | `(prompt: string) => Promise<Teacher[]>` |

Parameters:

* `prompt`: Tag name prompt


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L301)

### :gear: searchUnselectedTeachers

Searches for tags, by name prompt, that are not related to given image

| Function | Type |
| ---------- | ---------- |
| `searchUnselectedTeachers` | `(imageId: number, prompt: string) => Promise<Teacher[]>` |

Parameters:

* `id`: Image id
* `prompt`: Tag name prompt


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L318)

### :gear: getUsers

Gets all user logins

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `() => Promise<string[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L337)

### :gear: getUser

Gets user password

| Function | Type |
| ---------- | ---------- |
| `getUser` | `(login: string) => Promise<string or null>` |

Parameters:

* `login`: User login


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L352)

### :gear: getUserByToken

Gets user login by given auth token

| Function | Type |
| ---------- | ---------- |
| `getUserByToken` | `(token: string) => Promise<string or null>` |

Parameters:

* `token`: User auth token


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L367)

### :gear: updateUserToken

Updates user auth token

| Function | Type |
| ---------- | ---------- |
| `updateUserToken` | `(login: string, token: string) => Promise<void>` |

Parameters:

* `login`: User login
* `token`: User auth token


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L382)

### :gear: updateUserPassword

Updates users password

| Function | Type |
| ---------- | ---------- |
| `updateUserPassword` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L399)

### :gear: addUser

Adds user

| Function | Type |
| ---------- | ---------- |
| `addUser` | `(login: string, password: string) => Promise<void>` |

Parameters:

* `login`: User login
* `password`: User password


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L416)

### :gear: deleteUser

Deletes user

| Function | Type |
| ---------- | ---------- |
| `deleteUser` | `(login: string) => Promise<void>` |

Parameters:

* `login`: User login


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L429)

### :gear: getImageAmmount

Gets ammount of images

| Function | Type |
| ---------- | ---------- |
| `getImageAmmount` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L440)

### :gear: getImageWithTagAmmount

Gets ammount of images grouped by tags

| Function | Type |
| ---------- | ---------- |
| `getImageWithTagAmmount` | `() => Promise<number or null>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L453)

### :gear: getImageAmmountOnTeachers

Gets tags with ammount of related images order descendly

| Function | Type |
| ---------- | ---------- |
| `getImageAmmountOnTeachers` | `() => Promise<TeacherCount[]>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/db.ts#L466)

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

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L13)

### :gear: getStatistics

| Function | Type |
| ---------- | ---------- |
| `getStatistics` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L25)

### :gear: getAbout

| Function | Type |
| ---------- | ---------- |
| `getAbout` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L41)

### :gear: getLogin

| Function | Type |
| ---------- | ---------- |
| `getLogin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L53)

### :gear: postLogin

| Function | Type |
| ---------- | ---------- |
| `postLogin` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L57)

### :gear: getAdmin

| Function | Type |
| ---------- | ---------- |
| `getAdmin` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L77)

### :gear: getLogout

| Function | Type |
| ---------- | ---------- |
| `getLogout` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L81)

### :gear: getReset

| Function | Type |
| ---------- | ---------- |
| `getReset` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L93)

### :gear: postReset

| Function | Type |
| ---------- | ---------- |
| `postReset` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L97)

### :gear: getLogs

| Function | Type |
| ---------- | ---------- |
| `getLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L124)

### :gear: deleteLogs

| Function | Type |
| ---------- | ---------- |
| `deleteLogs` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L156)

### :gear: getUsers

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L174)

### :gear: postAddAdminUser

| Function | Type |
| ---------- | ---------- |
| `postAddAdminUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L179)

### :gear: deleteDeleteUser

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteUser` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L221)

### :gear: getImg

| Function | Type |
| ---------- | ---------- |
| `getImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L245)

### :gear: getImgUpdate

| Function | Type |
| ---------- | ---------- |
| `getImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L271)

### :gear: deleteImageDelete

| Function | Type |
| ---------- | ---------- |
| `deleteImageDelete` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L296)

### :gear: postImgUpdate

| Function | Type |
| ---------- | ---------- |
| `postImgUpdate` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L323)

### :gear: getRandomImg

| Function | Type |
| ---------- | ---------- |
| `getRandomImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L343)

### :gear: getAddImg

| Function | Type |
| ---------- | ---------- |
| `getAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => void` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L355)

### :gear: postApiAddImg

| Function | Type |
| ---------- | ---------- |
| `postApiAddImg` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L359)

### :gear: getTags

| Function | Type |
| ---------- | ---------- |
| `getTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L399)

### :gear: patchUpdateInTags

| Function | Type |
| ---------- | ---------- |
| `patchUpdateInTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L404)

### :gear: deleteDeleteFromTags

| Function | Type |
| ---------- | ---------- |
| `deleteDeleteFromTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L421)

### :gear: putAddToTags

| Function | Type |
| ---------- | ---------- |
| `putAddToTags` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L435)

### :gear: putImgTag

| Function | Type |
| ---------- | ---------- |
| `putImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L451)

### :gear: deleteImgTag

| Function | Type |
| ---------- | ---------- |
| `deleteImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L471)

### :gear: getImgTag

| Function | Type |
| ---------- | ---------- |
| `getImgTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L485)

### :gear: getTag

| Function | Type |
| ---------- | ---------- |
| `getTag` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L505)

### :gear: getImageTaglist

| Function | Type |
| ---------- | ---------- |
| `getImageTaglist` | `(req: Request, res: Response<any, Record<string, any>>) => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/routes/responses.ts#L515)


## :wrench: Constants

- [directory](#gear-directory)

### :gear: directory

Root directory of project

| Constant | Type |
| ---------- | ---------- |
| `directory` | `any` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/app.ts#L29)


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


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L24)

#### :gear: warning

Saves to log given message with tag WARNING

| Method | Type |
| ---------- | ---------- |
| `warning` | `(message: string) => Promise<void>` |

Parameters:

* `message`: Message to log


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L32)

#### :gear: error

Saves to log given message with tag ERROR

| Method | Type |
| ---------- | ---------- |
| `error` | `(message: string) => Promise<void>` |

Parameters:

* `message`: Message to log


[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L40)

#### :gear: clear

Deletes all saved logs

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => Promise<void>` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L47)

### Properties

- [LOGFILE](#gear-logfile)

#### :gear: LOGFILE

| Property | Type |
| ---------- | ---------- |
| `LOGFILE` | `"logs.log"` |

[:link: Source](https://github.com/sutaC/Gwiazdy-ZSI/tree/main/src/data/Logger.ts#L7)

## :tropical_drink: Interfaces

- [Request](#gear-request)

### :gear: Request



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `authorized` | `string or null` |  |

