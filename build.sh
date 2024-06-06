#!/bin/bash

TAG="latest"

while getopts t: flag
do
    case "${flag}" in
        t) TAG=${OPTARG};;
    esac
done

docker-compose build --build-arg TAG=$TAG