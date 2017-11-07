## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: picture, @tag: component-partial }}
{{#with picture-bp.variations.default}}
	{{> c-picture}}
{{/with}}
{{! @INSERT :: END }}
```