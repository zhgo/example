#!/bin/bash
# Copyright 2014 The zhgo Authors. All rights reserved.
# Use of this source code is governed by a BSD-style
# license that can be found in the LICENSE file.

# go install github.com/go-sql-driver/mysql
# go install github.com/mxk/go-sqlite/sqlite3

go build -o example.exe github.com/zhgo/example

if [ $? -eq 0 ]; then
      ./example.exe
else
      echo "Build faild."
fi
