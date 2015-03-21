// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport

import (
	"github.com/zhgo/orm"
)

// Module name.
var ModuleName string = "Passport"

// Entity struct
type UserEntity struct {
	UserId       int64 `pk:"true"`
	CreationTime []uint8
	Nickname     string
}

// User table object.
var userTable orm.Table = orm.NewTable("passport_user", new(UserEntity))

// Model struct
type UserModel struct {
	orm.Model //Import orm.Model
}

// New UserModel
func NewUserModel() *UserModel {
    return &UserModel{Module: ModuleName, Table: userTable}
}

// Custom function
func (u *UserModel) Example() {
    // TODO: do something here.
}
