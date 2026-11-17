#!/bin/bash
set -e

configs="config.toml"
if [ -f config.local.toml ]; then
  configs="config.toml,config.local.toml"
fi

hugo server --config "$configs" --baseURL "http://localhost:1313/" --disableFastRender
