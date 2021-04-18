// install and config workbench 
snap install mysql-workbench-community   
sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service

// docker
docker-compose up --build
docker-compose ps
sudo docker exec -it knex_database_1 mysql -h localhost -P 3306 -u admin -proot

// 
npm i -s knex mysql

npx knex migrate:make profiles
npx knex migrate:make users
npx knex migrate:make users_profiles

npx knex migrate:latest
npx knex migrate:rollback




