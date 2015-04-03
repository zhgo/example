#!/bin/bash

# go install github.com/go-sql-driver/mysql
# go install github.com/mxk/go-sqlite/sqlite3

go build -o example.exe github.com/zhgo/example

if [ $? -eq 0 ]; then
      ./example.exe
else
      echo "Build faild."
fi
