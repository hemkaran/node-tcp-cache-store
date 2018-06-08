# TCP based Cache-store service
This is in memory cache written in NodeJS based on TCP protocol.

## Run
To start the server run
```
node server.js
```

Now connect using a TCP client (telnet)
```
telnet 127.0.0.1 5000
```

You can simply fires the commands here
```
set name hemkaran
| Set name in cache done

get name
| hemkaran
```
## Features
#### Set a key 
Set the value corresponding to a key in cache

```
set <key> <value> <ttl> 
```

key: Name of the key to set
value: Value of the key
ttl: Time to live (in seconds)

```set name foo```
will set {name: 'foo'}

```set work bar 10```
will set {work: 'bar'} which will automatically expires in 10 seconds.

#### Get a key
Get the value of key from the cache

```
get <key> 
```

key: Name of the key to set

```get name```
will return 'foo'

```get work```
will return 'bar'

#### Get all keys
Returns the all keys in the cache

```
keys
```

result -> name, work

#### help
Will show the help menu
```
help
```

##### Example
![Example](https://photos-4.dropbox.com/t/2/AABgZ6skLTJ_JrBcX3ovGbMKAnW7GjhtCTPBCzEfMS4qwQ/12/439419913/png/32x32/3/1528502400/0/2/Screenshot%202018-06-09%2001.23.59.png/EPjjqcUDGL4DIAcoBw/715jVuKuhzhDjqhWOOz1pEBl1b6F3MTjurg4n0_AHxA?dl=0&preserve_transparency=1&size=1600x1200&size_mode=3)

## LICENSE
MIT License

Copyright (c) 2018 Hemkaran Raghav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.