// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
    _ "github.com/zhgo/example/web/collab"
    "github.com/zhgo/web"
    "github.com/zhgo/console"
    "log"
)

func main() {
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
