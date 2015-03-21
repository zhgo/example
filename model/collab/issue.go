// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package collab

import (
	"github.com/zhgo/db"
	"time"
)

// Table struct
type IssueTable struct {
	IssueId          int64 `pk:"true"`
	UserID           int64
	CreationTime     time.Time
	SetID            int64
	ParentIssueID    int64
	Type             int8
	Priority         int8
	ComponentID      int64
	Status           int8
	LatestActionTime time.Time
	AssigneeUserID   int64
	FinishedTime     time.Time
	Title            string
	Description      string
}

// Model struct
type IssueModel struct {
	db.Model //Import web.Model
}

// Model instance
var Issue IssueModel

// Init model
func init() {
	Issue.Init("Collab", "collab_issue", new(IssueTable))
}
