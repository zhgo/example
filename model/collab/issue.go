// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package collab

import (
	"github.com/zhgo/db"
	"time"
)

// Entity struct
type IssueEntity struct {
	IssueID          int64     `json:"issue_id" pk:"true"`
	UserID           int64     `json:"user_id"`
	CreationTime     time.Time `json:"creation_time"`
	SetID            int64     `json:"set_id"`
	ParentIssueID    int64     `json:"parent_issue_id"`
	Type             int8      `json:"type"`
	Priority         int8      `json:"priority"`
	ComponentID      int64     `json:"component_id"`
	Status           int8      `json:"status"`
	LatestActionTime time.Time `json:"latest_action_time"`
	AssigneeUserID   int64     `json:"assignee_user_id"`
	FinishedTime     time.Time `json:"finished_time"`
	Title            string    `json:"title"`
	Description      string    `json:"description"`
}

// Model struct
type IssueModel struct {
	db.Model //Import db.Model
}

// Table
var IssueTable = db.NewTable("collab_issue", new(IssueEntity))

// Model
var Issue = NewIssueModel()

// New Model
func NewIssueModel() *IssueModel {
	return &IssueModel{Model: db.Model{Module: "Collab", Table: IssueTable}}
}

// Model methods
