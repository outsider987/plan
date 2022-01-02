## Docker build up:

- Backend:
  - build up path: ./
  - `docker build -t backend .`
- Frontend:
  - build up path: /resource
  - `docker build -t react-frontend .`
- docker-compose:
  - we have to build up Frontend and Backend Image that we can go to next step
  - `docker-compose up`

# Without docker build up Step1:

sql create datas

```sql
create table plan (
id INT(11) NOT NULL AUTO_INCREMENT,
name varchar(200) NOT NULL  ,
general boolean NOT NULL default false,
specialist boolean NOT NULL default false,
physiotherapy boolean NOT NULL default false,
others boolean NOT NULL default false,
PRIMARY KEY (id));

insert plan (name,general,specialist, physiotherapy,others)
VALUES('premium',true,true,true,true);

insert plan (name,stardard,specialist, physiotherapy,others)
VALUES('standard',true,false,false,false);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 't52045204';
```

# Without docker build up Step2:

host is [http://localhost:4000/](http://localhost:4000/)

```jsx
yarn
yarn start

```

# Without docker build up Step3:

host is [http://localhost:3000/](http://localhost:4000/)

```jsx
cd resource
yarn
yarn webs
```

# Frontend :

Path: /resource

- Docker image is works
- I set sleep 3s to show api loading animation
- host is [http://localhost:3000/](http://localhost:4000/)

![Untitled](Untitled.png)

- view

![Untitled](Untitled1.png)

- router: standard and premium

# Backend :

- ResetFul API
  - GET /planField
  - GET /plans
- API Document [http://localhost:4000/api/docs/](http://localhost:4000/api/docs/) (Swagger)
- Docker image is works but had sql connect problem
- host is [http://localhost:4000/](http://localhost:4000/)
