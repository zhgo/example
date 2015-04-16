// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
    _ "github.com/zhgo/example/web/collab"
    _ "github.com/zhgo/example/web/passport"
    "github.com/zhgo/kernel"
    "github.com/zhgo/web"
    "github.com/zhgo/console"
    "log"
)

func main() {
    log.Printf("%s\n", kernel.WorkingDir)

    a, c, p := kernel.Console("example")

    if p == "" {
        web.App.Init(c)
        web.App.Load(func(r *web.Request) web.Result {
            //it will be called before run to action body, it's used to check the purview.
            //...
            return web.Result{1, ""}
        })
        web.App.Start()
    } else {
        console.App.Init(c)
        console.App.Load(p, a)
        console.App.Start()
    }
}
