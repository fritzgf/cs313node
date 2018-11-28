CREATE TABLE interviewsq
(
 interviewq_id SERIAL PRIMARY KEY,
 interviewText text NOT NULL,
 create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 

CREATE TABLE accounts
(
user_id SERIAL PRIMARY KEY,
userfirstname VARCHAR(100) NOT NULL,
userlastname VARCHAR(100) NOT NULL,
useremail VARCHAR(100) NOT NULL UNIQUE
);
 CREATE TABLE answers
(
answer_id SERIAL PRIMARY KEY,
 answerText text,
 account_id INT NOT NULL REFERENCES accounts (user_id),
 questions_id INT NOT NULL REFERENCES interviewsq (interviewq_id),
 create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 

CREATE TABLE users_questions
(
id SERIAL PRIMARY KEY,
account_id INT NOT NULL REFERENCES accounts (user_id),
interviewq_id INT NOT NULL UNIQUE REFERENCES interviewsq (interviewq_id)
);
INSERT INTO accounts(userfirstname, userlastname, useremail) VALUES ('Fritz', 'Fevrier', 'fgfevrier@gmail.com');


INSERT INTO interviewsq(interviewq_id, interviewtext) 
VALUES ('1','What is JavaScript');
INSERT INTO interviewsq(interviewq_id, interviewtext) 
VALUES ('2','What is Java');
CREATE USER interviewuser WITH PASSWORD 'interviewq';

GRANT ALL PRIVILEGES ON DATABASE interview_questions TO interviewuser;
GRANT INSERT, UPDATE, SELECT ON ALL TABLES IN SCHEMA public TO interviewuser;
