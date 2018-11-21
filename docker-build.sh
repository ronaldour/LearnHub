cd "${BASH_SOURCE%/*}" || exit

$(aws ecr get-login --no-include-email --region us-east-1)
docker build -t learnhub/frontend .
docker tag learnhub/frontend:latest 492864460344.dkr.ecr.us-east-1.amazonaws.com/learnhub/frontend:latest
docker push 492864460344.dkr.ecr.us-east-1.amazonaws.com/learnhub/frontend:latest

aws --region us-east-1 ecs update-service --cluster LearnHub --service Frontend --force-new-deployment