# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changelog maintained after version 0.3.1

## Version v0.5.2b - 02.05.2020

### Added

* [#318] added isRequired field

## Version 0.5.1 - 09.04.2020

### Added

* handling of duplication error (unique constrain)

## [0.5.0] - 04.04.2020

### Changed

* change ValidationError interface that it is aligned with AdminBro v2.2
* parse params works recursively

### Fixed

* fix error where old params were returned after updating the record

## [0.4.2] - 14.03.2020

### Changed

* Resource.build changes IDs from BSON object to strings by default

## [0.4.1] - 04.03.2020

### Changed

* remove obsolete console.warn 

## [0.4.0] - 01.01.2020

### Added

- add position field
- add findMany to resource

## [0.3.1] - 2019-12-17

### Fixed

- multiple fixes on nested objects
