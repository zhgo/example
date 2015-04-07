package main

import (
	_ "github.com/zhgo/example/web/collab"
	_ "github.com/zhgo/example/web/passport"
	"github.com/zhgo/kernel"
	"github.com/zhgo/web"
	"github.com/zhgo/console"
	"log"
    "flag"
)

func main() {
	log.Printf("%s\n", kernel.WorkingDir)

	var c, p, a string
	flag.StringVar(&c, "c", kernel.WorkingDir+"/example.json", "Usage: mplus -c=/path/to/example.json")
    flag.StringVar(&p, "p", "", "Usage: example -p=Passport/User/Login")
    flag.StringVar(&a, "a", "", "Usage: example -a=1/2/3")
	flag.Parse()

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
