#! /bin/bash
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
# refs: https://rietta.com/blog/2012/01/27/openssl-generating-rsa-key-from-command/

