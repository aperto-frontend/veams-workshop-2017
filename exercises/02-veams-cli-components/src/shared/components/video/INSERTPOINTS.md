## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: video, @tag: component-partial }}
{{#with video-bp.variations.default}}
    {{> c-video settings=this.settings content=this.content}}
{{/with}}
{{! @INSERT :: END }}
```