# aws-lambda-crud-sample

Sample project with:
  - Typescript
  - Serverless framework
  - AWS Lambda Function
  - AWS Gateway API
  - AWS DynamoDB

Run seed:
```sh
npm run aws:seed
```

Deploy stack on aws:
```sh
npm run aws:deploy
```

Remove stack on aws:
```sh
npm run aws:remove
```

Invoke GetAll Products (ProductIndex):
```sh
npm run aws:invoke-productIndex
```

Invoke GetById Product (ProductShow):
```sh
npm run aws:invoke-productShow
```

Invoke Create Product (ProductCreate):
```sh
npm run aws:invoke-productCreate
```

Invoke Delete (ProductDestroy):
```sh
npm run aws:invoke-productDestroy
```

Sample Validation Success (Person):
```sh
npm run aws:invoke-personSuccess
```

Sample Validation Error 1 (Person):
```sh
npm run aws:invoke-personError1
```

Sample Validation Error 2 (Person):
```sh
npm run aws:invoke-personError2
```
