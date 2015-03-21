// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package collab

import (
	"github.com/zhgo/example/model/collab"
	"github.com/zhgo/web"
	"log"
	"time"
)

type CollabIssue struct {
	//import web.Controller
	web.Controller
}

func init() {
	web.NewController(new(CollabIssue))
}

//Detail
func (c *CollabIssue) Detail(setId int64, id string) web.Result {
	return c.View.Render()
}

//Browse
func (c *CollabIssue) Browse(setId int64) web.Result {
	return c.View.Render()
}

//Insert
func (c *CollabIssue) AddSubmit(setId int64) web.Result {
	item1 := collab.IssueTable{CreationTime: time.Now(), LatestActionTime: time.Now(), FinishedTime: time.Now(), Title: "Demo"}
	item2 := collab.IssueTable{CreationTime: time.Now(), LatestActionTime: time.Now(), FinishedTime: time.Now(), Title: "小六"}
	data := []interface{}{item1, item2}

	lastInsertId, err := collab.Issue.Query().Insert(&data)

	log.Printf("%d\n", lastInsertId)
	return web.Result{lastInsertId, err.Error()}
}

//Update
func (c *CollabIssue) EditSubmit(setId int64, id string) web.Result {
	return c.View.Render()
}

//Delete
func (c *CollabIssue) DeleteSubmit(setId int64, id string) web.Result {
	return c.View.Render()
}
