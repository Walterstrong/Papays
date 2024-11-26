Basic PostgreSQL Questions

1. What is PostgreSQL?

- PostgreSQL is an open-source, object-relational database management system (ORDBMS) that emphasizes extensibility and SQL compliance. It supports both SQL (relational) and JSON (non-relational) querying.

2. What are the main features of PostgreSQL?

- Some key features include ACID compliance, support for complex queries, full-text search, multi-version concurrency control (MVCC), extensibility, and support for various data types.

3. How is PostgreSQL different from MySQL?

- PostgreSQL is more feature-rich, with advanced capabilities like complex queries, full-text search, and custom data types, whereas MySQL is known for its speed and ease of use in simpler applications.

4. What is MVCC in PostgreSQL?

- Multi-Version Concurrency Control (MVCC) is a method used to manage concurrent transactions. It allows multiple transactions to access the database without blocking each other, by maintaining multiple versions of the data.

5. What is the role of pg_hba.conf in PostgreSQL?

- The pg_hba.conf file is used to configure client authentication. It determines which hosts can connect to which databases, using what authentication methods.

6. What are sequences in PostgreSQL?

- Sequences are special kinds of database objects used to generate unique identifiers automatically. They are typically used for auto-incrementing primary keys.

7. What is a tablespace in PostgreSQL?

- A tablespace is a location on disk where PostgreSQL stores database objects like tables and indexes. It allows the database administrator to control the location of data storage.

8. Explain the difference between a primary key and a unique key.

- A primary key uniquely identifies a record in a table and does not allow NULL values, while a unique key also enforces uniqueness but allows a single NULL value.

9. What is the pg_dump utility used for?

- pg_dump is used to back up a PostgreSQL database. It generates a text file with SQL commands that can recreate the database, including its schema and data.

10. How can you list all the tables in a PostgreSQL database?

- You can list all tables using the \dt command in the psql command-line tool or by querying the information_schema.tables view.
  Intermediate PostgreSQL Questions

11. How do you create a new user in PostgreSQL?

- You can create a new user using the CREATE USER username WITH PASSWORD 'password'; SQL command.
  What is a CTE in PostgreSQL?

- A Common Table Expression (CTE) is a temporary result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement.

12. Explain the VACUUM command in PostgreSQL.

- The VACUUM command is used to clean up the database by reclaiming storage occupied by dead tuples. It helps to maintain the health of the database.

13. How do you perform a full-text search in PostgreSQL?

- PostgreSQL provides the tsvector and tsquery data types and related functions for full-text search. You can use the to_tsvector and to_tsquery functions to perform full-text searches.

14. What are indexes in PostgreSQL, and why are they used?

- Indexes are database objects that improve the speed of data retrieval operations on a database table. They work like a pointer to the data in the table.

15. How do you add a column to an existing table in PostgreSQL?

- You can add a column using the ALTER TABLE table_name ADD COLUMN column_name data_type; command.

16. Explain the difference between INNER JOIN and OUTER JOIN.

- An INNER JOIN returns only the rows that have matching values in both tables, while an OUTER JOIN returns all rows from one table and the matching rows from the other table, with NULLs in the non-matching rows.

17. How do you check the version of PostgreSQL?

- You can check the version by running the SELECT version(); command or using the psql --version command in the terminal.

18. What is the purpose of the EXPLAIN command?

- The EXPLAIN command is used to display the execution plan of a query. It shows how the query planner intends to execute the query, including the use of indexes, joins, and other operations.

19. What is a materialized view in PostgreSQL?

- A materialized view is a database object that contains the results of a query. It is stored on disk and can be refreshed periodically, unlike a regular view that is computed on the fly.

20. How do you handle database replication in PostgreSQL?

- PostgreSQL supports replication through various methods, including streaming replication, logical replication, and WAL (Write-Ahead Logging) shipping.

21. What is a HOT update in PostgreSQL?

- HOT (Heap-Only Tuple) updates occur when a row is updated without changing any indexed columns, allowing the new row version to be stored in the same page, which avoids index changes.

22. Explain the concept of partitioning in PostgreSQL.

- Partitioning is the process of dividing a large table into smaller, more manageable pieces called partitions, based on a specific column (like date or range). It improves query performance and management.

23. How do you perform a database upgrade in PostgreSQL?

- You can upgrade PostgreSQL using methods like pg_dump/pg_restore, pg_upgrade, or logical replication, depending on the version and requirements.

24. What is TOAST in PostgreSQL?

- TOAST (The Oversized-Attribute Storage Technique) is a mechanism that automatically stores large values out-of-line, compressing and saving them in a separate table to avoid bloat in the main table.

25. What are schemas in PostgreSQL?

- Schemas in PostgreSQL are a way to organize database objects (tables, views, functions, etc.) into logical groups. Each schema acts as a namespace within the database.

26. How do you optimize a query in PostgreSQL?

- You can optimize queries by using indexes, rewriting queries, using proper join techniques, analyzing query plans with EXPLAIN, and adjusting PostgreSQL configuration settings.

27. What is the pg_stat_statements extension?

- pg_stat_statements is an extension that tracks execution statistics of SQL statements, allowing you to analyze query performance over time.

29. How does PostgreSQL handle transactions?

- PostgreSQL handles transactions using the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring that database operations are processed reliably.

30. What are foreign data wrappers (FDWs) in PostgreSQL?

- Foreign Data Wrappers allow PostgreSQL to access data stored in external databases or file systems as if it were a regular table within the PostgreSQL database.

31. PostgreSQL Performance and Tuning
    How do you monitor performance in PostgreSQL?

- Performance can be monitored using tools like pg_stat_activity, pg_stat_statements, pg_top, pgAdmin, and third-party tools like pgBadger.

32. What is autovacuum, and how does it work in PostgreSQL?

- Autovacuum is a background process that automatically reclaims storage by removing dead tuples from tables and indexes, preventing table bloat.

33. How do you analyze the performance of a query?

- Use the EXPLAIN ANALYZE command to analyze query performance. It shows the actual execution plan, including the time taken for each operation.

34. What is connection pooling, and why is it important?

- Connection pooling is a method of reusing database connections to reduce the overhead of establishing a connection. It improves performance by reducing the load on the database server.

35. What is work_mem in PostgreSQL, and how does it affect query performance?

- work_mem is a configuration parameter that determines the amount of memory to be used for internal sort operations and hash tables before writing to temporary disk files. Larger values can improve performance but increase memory usage.

36. What are the different types of indexes in PostgreSQL?

- PostgreSQL supports several types of indexes, including B-tree, Hash, GiST, GIN, and BRIN, each optimized for different types of queries.

37. How do you perform query optimization in PostgreSQL?

- Query optimization involves using indexes, optimizing joins, reducing subqueries, rewriting complex queries, and tuning PostgreSQL settings like shared_buffers, work_mem, and maintenance_work_mem.

38. What is shared_buffers in PostgreSQL?

- shared_buffers is a configuration parameter that determines the amount of memory allocated for caching data blocks. It significantly impacts the database's I/O performance.

39. How do you handle large datasets in PostgreSQL?

- Handling large datasets can be done through partitioning, proper indexing, using efficient queries, and leveraging PostgreSQL features like parallel query execution and work_mem tuning.

40. What is pg_repack and when would you use it?

- pg_repack is a tool used to reclaim space in tables and indexes without blocking writes, useful for maintaining database performance without downtime.

41. How do you secure a PostgreSQL database?

- Security can be ensured by configuring pg_hba.conf, using SSL for connections, setting up role-based access control (RBAC), regularly updating the database, and applying security patches.

42. What is pg_hba.conf and how does it control access?

- pg_hba.conf is the host-based authentication configuration file that controls which users can connect to which databases from which hosts, using what authentication methods.

43. How do you encrypt data in PostgreSQL?

- Data encryption can be implemented through SSL for encrypting data in transit, using the pgcrypto extension for encrypting specific columns, and enabling Transparent Data Encryption (TDE) for encrypting data at rest.

44. What is role-based access control (RBAC) in PostgreSQL?

- RBAC is a method of managing user permissions by assigning roles to users and granting permissions to roles, rather than to individual users directly.

45. How do you implement SSL in PostgreSQL?

- SSL can be enabled in PostgreSQL by configuring the server to use SSL certificates, adjusting the postgresql.conf file to use ssl = on, and modifying pg_hba.conf to require SSL for specific connections.

46. What is pg_ctl and how is it used?

- pg_ctl is a utility used to start, stop, and control the PostgreSQL server. It can also be used to check the status of the server and send signals to the server process.

47. How do you create a backup and restore a PostgreSQL database?

- Backups can be created using pg_dump for a single database or pg_basebackup for a full cluster backup. Restoration is done using psql or pg_restore depending on the backup type.

48. What is logical replication in PostgreSQL?

- Logical replication allows selective replication of database objects (like specific tables) and is more flexible than physical replication. It is typically used for data distribution, ETL processes, and real-time data warehousing.

49. How do you manage database roles and permissions?

- Database roles and permissions are managed using the CREATE ROLE, GRANT, and REVOKE commands, allowing you to control access to database objects.

50. How do you troubleshoot performance issues in PostgreSQL?

- Troubleshooting involves checking logs, analyzing query plans with EXPLAIN, monitoring server performance metrics, adjusting configuration parameters, and using tools like pg_stat_statements and pg_top.

51. These questions cover a wide range of topics in PostgreSQL and are designed to assess both foundational knowledge and practical experience with the database system.

52. What is an ORM?

- An ORM (Object-Relational Mapper) is a programming technique used to convert data between incompatible systems (like relational databases and object-oriented programming languages). It allows developers to interact with the database using an object-oriented approach instead of writing raw SQL.

53. What are Prisma and Sequelize?

- Prisma is a modern ORM for Node.js and TypeScript that provides a type-safe API, schema-driven development, and database migrations. Sequelize is a promise-based ORM for Node.js, supporting multiple dialects like PostgreSQL, MySQL, SQLite, and more.

54. How does Prisma differ from Sequelize?

- Prisma focuses on type safety, schema-driven development, and developer experience with auto-generated queries and TypeScript support. Sequelize is more traditional, providing flexibility with query building and support for multiple database dialects, but it lacks the type safety that Prisma offers.

55. What is the purpose of the Prisma schema file?

- The Prisma schema file (schema.prisma) defines the data model, database connection details, and generator configuration. It acts as the single source of truth for your database structure in a Prisma project.

56. How do you define a model in Sequelize?

- In Sequelize, a model is defined using the sequelize.define method or by extending the Model class. It maps a database table to a JavaScript class.

57. What are migrations in ORM, and why are they important?

- Migrations are version-controlled files that define changes to the database schema over time. They are important for managing schema evolution, especially in collaborative environments, ensuring that all team members' databases are in sync.

58. How do you run migrations in Prisma?

- In Prisma, migrations are managed using the Prisma CLI. You can generate and apply migrations using the prisma migrate dev or prisma migrate deploy commands.

59. What is the difference between findUnique and findMany in Prisma?

- findUnique retrieves a single record based on a unique constraint, while findMany retrieves multiple records that match the specified criteria.

60. How do you create a one-to-many relationship in Sequelize?

- In Sequelize, a one-to-many relationship is created using the hasMany and belongsTo associations. For example, User.hasMany(Post) and Post.belongsTo(User).

61. What are hooks in Sequelize, and how are they used?

- Hooks in Sequelize are lifecycle events that allow you to execute custom logic before or after certain actions, like creating, updating, or deleting records. For example, you can use the beforeCreate hook to hash a password before saving a user.

62. How does Prisma handle pagination?

- Prisma handles pagination using the skip, take, and cursor parameters in queries. These parameters allow you to paginate results efficiently.

63. Explain eager loading in Sequelize.

- Eager loading in Sequelize refers to the process of loading associated models alongside the main model in a single query. This is done using the include option in the query.

64. What are seeders in Sequelize, and why are they used?

- Seeders in Sequelize are scripts used to populate the database with initial or test data. They are useful for setting up default data or for testing purposes.

65. How do you handle transactions in Prisma?

- In Prisma, transactions can be handled using the prisma.$transaction method, which groups multiple operations into a single transaction.

66. What is Prisma Client, and how is it used?

- Prisma Client is an auto-generated, type-safe query builder for Node.js and TypeScript, allowing you to interact with your database in a type-safe manner.

67. How do you perform raw SQL queries in Sequelize?

- In Sequelize, raw SQL queries can be executed using the sequelize.query method, allowing you to run custom SQL directly against the database.

68. What is a prisma.service in NestJS with Prisma?

- In NestJS, the prisma.service is a service class that wraps the Prisma Client instance and provides it as a singleton to the rest of the application. It ensures that there’s a single connection to the database across the application.

69. How does Prisma ensure type safety?

- Prisma ensures type safety by generating TypeScript types based on your schema. This means that any query you write using Prisma Client is type-checked, reducing the risk of runtime errors.

70. How do you perform migrations in Sequelize?

- In Sequelize, migrations are managed using the Sequelize CLI. You can create, run, and revert migrations using commands like sequelize migration:create, sequelize db:migrate, and sequelize db:migrate:undo.

71. What are scopes in Sequelize, and how are they used?

- Scopes in Sequelize allow you to define reusable query logic that can be applied to models. They can be used to filter results based on common conditions, like active users or published posts.

72. How do you implement soft deletes in Prisma?

- Soft deletes in Prisma can be implemented by adding a deletedAt field to your model and filtering queries to exclude records where deletedAt is not null.

73. What is schema.prisma, and how does it relate to Prisma migrations?

- schema.prisma is the Prisma schema file that defines your data models and relationships. Prisma migrations are generated based on changes to this schema file.

74. Explain the use of paranoid option in Sequelize.

- The paranoid option in Sequelize is used to implement soft deletes. When paranoid is set to true, records are not actually deleted from the database; instead, a deletedAt timestamp is set, and Sequelize automatically filters out these records from queries.

75. How do you handle many-to-many relationships in Prisma?

- Many-to-many relationships in Prisma are handled using a through model (also known as a join table) that links the two related models.

76. What is the cascade option in Sequelize associations?

- The cascade option in Sequelize is used in associations to automatically delete or update related records when a parent record is deleted or updated.

77. How does Prisma handle database transactions?

- Prisma handles database transactions using the prisma.$transaction method, which allows you to execute multiple database operations atomically.

78. How do you implement a unique constraint in Sequelize?

- A unique constraint in Sequelize can be implemented by setting the unique option to true on a column or defining a unique composite key using the uniqueKeys option.

79. What is the findAndCountAll method in Sequelize?

- The findAndCountAll method in Sequelize is used to retrieve records along with the total count of records that match the query criteria, useful for implementing pagination.

80. How does Prisma support multiple databases?

- Prisma supports multiple databases by configuring multiple data sources in the schema.prisma file, each with its own connection details.

81. What are virtual fields in Sequelize?

- Virtual fields in Sequelize are fields that are not stored in the database but are computed on the fly based on other fields or data. They are defined using the get method in the model definition.

  ORM Performance and Tuning

82. How do you optimize queries in Prisma?

- Query optimization in Prisma can be done by minimizing the number of database calls, using batch operations, and leveraging indexes and efficient query patterns.

83. Explain N+1 query problem and how to solve it in Sequelize.

- The N+1 query problem occurs when a separate query is executed for each related entity, leading to inefficient database access. In Sequelize, this can be solved by using eager loading with the include option.

84. How do you handle large datasets in Prisma?

- Large datasets in Prisma can be handled by using pagination techniques, batching operations, and optimizing queries to reduce load on the database.

85. What is lazy loading in Sequelize, and how does it differ from eager loading?

- Lazy loading in Sequelize refers to the practice of loading related data only when it is accessed, as opposed to eager loading, where related data is loaded alongside the main entity.

86. How does Prisma's type safety improve performance?

- While type safety itself does not directly improve runtime performance, it helps prevent errors at compile time, reducing the likelihood of runtime errors and improving overall code quality and maintainability.

87. How do you handle complex queries in Sequelize?

- Complex queries in Sequelize can be handled using advanced querying features like scopes, raw SQL, nested include statements, and custom query functions.

88. What is connection pooling, and how is it managed in Prisma?

- Connection pooling refers to the practice of reusing database connections to improve performance. In Prisma, connection pooling is managed by the underlying database driver, and you can configure it through the connection URL.

89. How do you manage database indexes in Prisma?

- In Prisma, indexes can be defined directly in the schema.prisma file using the @@index or @unique annotations on models and fields.

90. What are bulk operations in Sequelize, and when would you use them?

- Bulk operations in Sequelize, such as bulkCreate, bulkUpdate, and bulkDelete, are used to perform multiple database operations in a single query, improving performance when dealing with large datasets.

91. How do you monitor and log database queries in Prisma?

- Prisma allows you to monitor and log database queries by enabling query logging in the Prisma Client, which can be configured in the Prisma Client instance.

  ORM Best Practices and Design Patterns

92. What are the best practices for using Prisma in a production environment?

- Best practices for using Prisma in production include keeping your schema in sync with migrations, using environment-specific configurations, monitoring database performance, and implementing proper error handling.

93. How do you handle circular dependencies in Sequelize models?

- Circular dependencies in Sequelize models can be handled by using require statements inside model files or by defining associations after all models have been initialized.

94. What is the repository pattern, and how does it apply to ORMs like Prisma?

- The repository pattern is a design pattern that abstracts data access, providing a clean API for interacting with data sources. In Prisma, you can implement the repository pattern by encapsulating Prisma Client operations in repository classes.

95. How do you manage environment-specific configurations in Prisma?

- Environment-specific configurations in Prisma are managed using environment variables, which can be accessed in the schema.prisma file and during the initialization of the Prisma Client.

96. How do you handle database migrations in a CI/CD pipeline with Prisma?

- Database migrations in a CI/CD pipeline with Prisma can be handled by running migrations as part of the deployment process, ensuring that the database schema is up-to-date before deploying the application.

97. What are common pitfalls to avoid when using Sequelize?

- Common pitfalls in Sequelize include improper handling of transactions, not using associations correctly, ignoring the N+1 query problem, and failing to define proper indexes.

98. How do you manage versioning of your database schema with Prisma?

- Database schema versioning with Prisma is managed using migrations, where each migration file represents a specific version of the schema. Prisma's migration system helps track and apply changes incrementally.

99. What is the lazy option in Sequelize relationships?

- The lazy option in Sequelize relationships is used to specify that related data should be loaded only when explicitly requested, implementing lazy loading behavior.

100.  How do you handle error handling and retries in Prisma?

- Error handling in Prisma can be implemented using try-catch blocks, and retries can be managed using custom logic or third-party libraries that support retry mechanisms.

101.  What is the role of TypeScript in Prisma, and how does it enhance development?

- TypeScript plays a significant role in Prisma by providing type safety, autocompletion, and better code maintainability. It enhances development by reducing runtime errors and improving the overall developer experience.
