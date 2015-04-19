// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport

import (
	"github.com/zhgo/example/model/passport"
	"github.com/zhgo/web"
)

type UserController struct {
	web.Controller // import web.Controller
}

func init() {
	web.NewController("Passport", new(UserController))
}

//Detail
func (c *UserController) Detail(setId int64, id string) web.Result {
	userEntity := passport.UserEntity{}
    q := passport.User.Select()
    q.Where(q.Like("Nickname", "%中%")).Row(&userEntity)

    userMap := map[string]interface{}{}
    q = passport.User.Select("Nickname")
    q.Row(&userMap)

    userSlice := []interface{}{}
    q = passport.User.Select("Nickname")
    q.Row(&userSlice)

	c.View.Set("Title", "Region Browse")
	c.View.Set("UserStruct", &userEntity)
	c.View.Set("UserMap", &userMap)
	c.View.Set("UserSlice", &userSlice)

	return c.View.Render()
}

//Browse
func (c *UserController) BrowseBySet(setId int64) web.Result {
    userEntity := []passport.UserEntity{}
    q := passport.User.Select()
    q.Where(q.Like("Nickname", "%中%")).Rows(&userEntity)

    userMap := []map[string]interface{}{}
    q = passport.User.Select("Nickname")
    q.Rows(&userMap)

    userSlice := [][]interface{}{}
    q = passport.User.Select("Nickname")
    q.Rows(&userSlice)

	c.View.Set("Title", "Region Browse")
	c.View.Set("RegionStruct", &userEntity)
	c.View.Set("RegionMap", &userMap)
	c.View.Set("RegionSlice", &userSlice)

	return c.View.Render()
}

//Insert
/*func (c *UserController) AddSubmit(setId int64) web.Result {
    item1 := passport.UserEntity{UserId: 2, Nickname: "Demo"}
	item2 := passport.UserEntity{UserId: 6, Nickname: "小六"}
	data := []interface{}{item1, item2}
    q := passport.User.Insert()
    // FIXME: Struct is incorrect.
    r, err := q.Exec(data)

	log.Printf("%d\n", r.LastInsertId())
	return web.Result{r.LastInsertId(), err.Error()}
}*/

//Update
/*func (c *UserController) EditSubmit(setId int64, id string) web.Result {
	data := map[string]interface{}{"Nickname": "Demo111"}

    q := passport.User.Update()
    q.Where(q.Eq("UserID", "1"))
	r, err := q.Exec(data)

	log.Printf("%d\n", r.RowsAffected())
	return web.Result{r.RowsAffected(), err.Error()}
}*/

//Delete
/*func (c *UserController) DeleteSubmit(setId int64, id string) web.Result {
    q := passport.User.Delete()
    r, err := q.Where(q.Eq("UserID", "1")).Exec()


	log.Printf("%d\n", r.RowsAffected())
	return web.Result{r.RowsAffected(), err.Error()}
}*/
