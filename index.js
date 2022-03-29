//  Allows both import and require in module
import { createRequire } from "module"
const require = createRequire(import.meta.url)
//

let langs = require('langs')
import {franc, francAll} from 'franc'

let arg = process.argv[2]

let code = franc(arg)

if(code!="und"){
    try{
        console.log(langs.where("2", code).name);
    } catch{
        console.log(`Error, could not find language with code: ${code}`)
    }
}else{
    console.log("Invalid input")
}
