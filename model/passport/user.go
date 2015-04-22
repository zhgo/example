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
	db.Model //Import db.Model
}

// Table
var UserTable = db.NewTable("passport_user", new(UserEntity))

// Model
var User = NewUserModel()

// New Model
func NewUserModel() *UserModel {
    return &UserModel{Model: db.Model{Module: "Passport", Table: UserTable}}
}


// Model methods

// Example
func (m *UserModel) Example() {
    // TODO: do something here.
}
