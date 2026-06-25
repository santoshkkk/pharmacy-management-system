# Pharmacy Management System

A 3-tier application deployed using Docker and Docker Compose.

## Architecture

Frontend: Nginx + HTML

Backend: Node.js + Express

Database: MySQL

## Project Structure

frontend/
backend/
docker-compose.yml

## Prerequisites

Docker
Docker Compose

## Run Application

docker compose up -d --build

## Access

Frontend:
http://localhost:8080

Backend:
http://localhost:7000/data

## Stop

docker compose down

## Remove Containers

docker compose down -v
