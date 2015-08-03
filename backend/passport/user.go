// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport

import (
	"github.com/zhgo/db"
	"time"
)

// Entity struct
type UserEntity struct {
	UserID       int64     `json:"issue_id" pk:"true"`
	CreationTime time.Time `json:"creation_time"`
	Title        string    `json:"title"`
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
