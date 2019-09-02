# graphQL-node-mongoose

## Steps to follow

- Clone the repo

- npm i

- npm start

- Open http://localhost:4000/graphql and start experimenting

## Create Cat
```
mutation {
  createCat(name : "Bella 1") {
    id,
    name
  }
}
```

## Get all cats
```
{
  cats {
    id
    name
    tests {
      id
      positive
    }
  }
}
```

## Create test and update in cat record
```
mutation {
  createTests(
    name: "FIV 123"
    positive: false
    catId: "5d6d28fb79036b40abec31e2"
  ) {
    id
    name
  }
}
```

## Get all tests
```
{
  tests {
    id
    name
    positive
  }
}
```
