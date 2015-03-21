#!/bin/bash

# go install github.com/go-sql-driver/mysql
# go install github.com/mxk/go-sqlite/sqlite3

go build -o suite.exe github.com/zhgo/suite

if [ $? -eq 0 ]; then
      ./suite.exe
else
      echo "Build faild."
fi
