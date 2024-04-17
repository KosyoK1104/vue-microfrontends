#!/bin/zsh

npm run --prefix root-config start &
npm run --prefix navbar serve &
npm run --prefix notifications serve &
npm run --prefix app-one serve &
npm run --prefix app-two serve
