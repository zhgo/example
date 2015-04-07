// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport

import (
	"github.com/zhgo/example/model/passport"
	"github.com/zhgo/web"
	"log"
)

type UserController struct {
	//import web.Controller
	web.Controller
}

func init() {
	web.NewController("Passport", new(UserController))
}

//Detail
func (c *UserController) Detail(setId int64, id string) web.Result {
    user := passport.NewUserModel()

	userEntity := passport.UserEntity{}
    user.Select().Where("Nickname", "LIKE", "%中%").Row(&userEntity)

    userMap := map[string]interface{}{}
    user.Select("Nickname").Row(&userMap)

    userSlice := []interface{}{}
    user.Select("Nickname").Row(&userSlice)

	c.View.Set("Title", "Region Browse")
	c.View.Set("UserStruct", &userEntity)
	c.View.Set("UserMap", &userMap)
	c.View.Set("UserSlice", &userSlice)

	return c.View.Render()
}

//Browse
func (c *UserController) BrowseBySet(setId int64) web.Result {
    user := passport.NewUserModel()

	region := []passport.UserEntity{}
    user.Select().Where("Nickname", "LIKE", "%中%").Rows(&region)

	regionMap := []map[string]interface{}{}
    user.Select("Nickname").Rows(&regionMap)

	regionSlice := [][]interface{}{}
    user.Select("Nickname").Rows(&regionSlice)

	c.View.Set("Title", "Region Browse")
	c.View.Set("RegionStruct", &region)
	c.View.Set("RegionMap", &regionMap)
	c.View.Set("RegionSlice", &regionSlice)

	return c.View.Render()
}

//Insert
func (c *UserController) AddSubmit(setId int64) web.Result {
    user := passport.NewUserModel()

    item1 := passport.UserEntity{UserId: 2, Nickname: "Demo"}
	item2 := passport.UserEntity{UserId: 6, Nickname: "小六"}
	data := []interface{}{item1, item2}

	lastInsertId, err := user.Insert(&data)

	log.Printf("%d\n", lastInsertId)
	return web.Result{lastInsertId, err.Error()}
}

//Update
func (c *UserController) EditSubmit(setId int64, id string) web.Result {
    user := passport.NewUserModel()

	data := map[string]interface{}{"Nickname": "Demo111"}

	//rowsAffected, err := passport.User.Query().Where("region_id", "=", "1643").Update(&data)
	rowsAffected, err := user.Update(&data)

	log.Printf("%d\n", rowsAffected)
	return web.Result{rowsAffected, err.Error()}
}

//Delete
func (c *UserController) DeleteSubmit(setId int64, id string) web.Result {
    user := passport.NewUserModel()

    //rowsAffected, err := passport.User.Query().Where("region_id", "=", "1643").Delete()
    rowsAffected, err := user.Delete()

	log.Printf("%d\n", rowsAffected)
	return web.Result{rowsAffected, err.Error()}
}
