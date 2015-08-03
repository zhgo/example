// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package collab_controller

import (
	"github.com/zhgo/web"
)

type IssueController struct {
	web.Controller // import web.Controller
}

func init() {
	web.NewController("Collab", new(IssueController))
}

//Insert
/*func (c *IssueController) Add(setId int64) interface{} {
    item1 := collab.IssueEntity{CreationTime: time.Now(), LatestActionTime: time.Now(), FinishedTime: time.Now(), Title: "Demo"}
	item2 := collab.IssueEntity{CreationTime: time.Now(), LatestActionTime: time.Now(), FinishedTime: time.Now(), Title: "小六"}
	data := []interface{}{item1, item2}
    q := collab.Issue.Insert()
    // FIXME: Struct is incorrect.
    r, err := q.Exec(data)

	log.Printf("%d\n", r.LastInsertId())
	return web.Result{r.LastInsertId(), err.Error()}
}*/
