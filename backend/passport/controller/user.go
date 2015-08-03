// Copyright 2014 The zhgo Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package passport_controller

import (
	"github.com/zhgo/web"
)

type PassportController struct {
	web.Controller // import web.Controller
}

func init() {
	web.NewController("Passport", new(PassportController))
}
