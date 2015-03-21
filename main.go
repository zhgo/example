package main

import (
	_ "github.com/zhgo/example/web/collab"
	_ "github.com/zhgo/example/web/passport"
	"github.com/zhgo/web"
	"log"
)

func init() {
	///web.App.Init(web.WorkingDir + "/suite.json")
}

func main() {
	log.Printf("%s\n", web.WorkingDir)

	/*var c string
	flag.StringVar(&c, "c", web.WorkingDir+"/suite.json", "Usage: mplus -c=/path/to/examples.json")
	flag.Parse()

	web.App.Init(c)*/

	//Start HTTP server
	web.App.NewServer(func(r *web.Request) web.Result {
		//it will be called before run to action body, it's used to check the purview.
		//...

		return web.Result{1, ""}
	})
}
