import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '83e25e04287247c285194ea217fa15dd'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '7cc3b7ad381844f58d65893ee12c7951'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'e56f5c294c714424b2a498a569cff4df'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'e2c1468658a14a4cadbf23d3de799413'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '823d875917d3430aa8fefb83f0728022'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b0b331f12ed64086b04d74f2e5f5ba2f'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '1f9c8bf3ff924bf4ba2eb36d301c8a9d'
                    }
                }
            }
        }
    }
}
