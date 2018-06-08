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