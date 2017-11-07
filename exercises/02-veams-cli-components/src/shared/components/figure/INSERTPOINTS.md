## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: figure, @tag: component-partial }}
{{#with figure-bp.simple}}
	{{> c-figure}}
{{/with}}

{{#with figure-bp.caption}}
	{{> c-figure}}
{{/with}}

{{#with figure-bp.video}}
	{{> c-figure}}
{{/with}}
{{! @INSERT :: END }}
```