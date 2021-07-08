name: Copy Posts

on: push

jobs:
build:
runs - on: ubuntu - latest
steps:
- name: Checkout
uses: actions / checkout@v2
- name: Pushes to another repository
id: push_directory
uses: SamSaprykin / actions - test
env:
API_TOKEN_GITHUB: ${ { secrets.API_TOKEN_GITHUB } }
with:
source_folder: 'test_files'
destination_repo: 'dmnemec/release-test'
user_email: 'devin.nemec@gmail.com'
user_name: 'dmnemec'
commit_msg: '[GHA] Update the test files.'
source_folder: 'guides'
destination_repo: 'SamSaprykin/dest-actions'
destination_folder: 'static'
user_email: saprykinse@gmail.com
user_name: SamSaprykin
commit_msg: Update data with the latest published blog posts
target_branch: main