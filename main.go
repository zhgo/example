// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"github.com/zhgo/console"
	_ "github.com/zhgo/example/backend/collab/controller"
	_ "github.com/zhgo/example/backend/passport/controller"
	"github.com/zhgo/web"
	"log"
)

func main() {
	log.SetFlags(log.Lshortfile)
	log.Printf("%s\n", console.WorkingDir)

	c, p := console.Arguments("example")

	if p == "" {
		web.App.Init(c)
		web.App.Load(func(req *web.Request) web.Result {
			//it will be called before run to action body, it's used to check the purview.
			//...
			return web.Result{1, ""}
		})
		web.App.Start()
	} else {
		console.App.Init(c)
		console.App.Load(p)
		console.App.Start()
	}
}
