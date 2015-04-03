// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport

import (
	"github.com/zhgo/db"
)

// Entity struct
type UserEntity struct {
	UserId       int64 `pk:"true"`
	CreationTime []uint8
	Nickname     string
}

// Model struct
type UserModel struct {
	db.Model //Import orm.Model
}

// Table object.
var userTable db.Table = db.NewTable("passport_user", new(UserEntity))

// New Model
func NewUserModel() *UserModel {
    //return &UserModel{Module: "Passport", Table: userTable}
    m := UserModel{}
    m.Module = "Passport"
    m.Table = userTable
    return &m
}

// Custom function
func (u *UserModel) Example() {
    // TODO: do something here.
}
