# File Upload

File Upload
===========

Used to select and upload files from their device.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/file-upload)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-file-upload--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/file-upload.ts)[Ark](https://ark-ui.com/react/docs/components/file-upload)

[Usage](#usage)
---------------

```
import { FileUpload } from "@chakra-ui/react"
```

```
<FileUpload.Root>
  <FileUpload.HiddenInput />
  <FileUpload.Label />
  <FileUpload.Dropzone>
    <FileUpload.DropzoneContent />
  </FileUpload.Dropzone>
  <FileUpload.Trigger />
  <FileUpload.ItemGroup>
    <FileUpload.Item>
      <FileUpload.ItemPreview />
      <FileUpload.ItemFileName />
      <FileUpload.ItemSizeText />
      <FileUpload.ItemDeleteTrigger />
    </FileUpload.Item>
  </FileUpload.ItemGroup>
</FileUpload.Root>
```

[Shortcuts](#shortcuts)
-----------------------

The `FileUpload` component also provides a set of shortcuts for common use cases.

### [FileUploadItems](#fileuploaditems)

By default, the `FileUploadItems` shortcut renders the list of uploaded files.

This works:

```
<FileUpload.ItemGroup>
  <FileUpload.Context>
    {({ acceptedFiles }) =>
      acceptedFiles.map((file) => (
        <FileUpload.Item key={file.name} file={file}>
          <FileUpload.ItemPreview />
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger />
        </FileUpload.Item>
      ))
    }
  </FileUpload.Context>
</FileUpload.ItemGroup>
```

This might be more concise, if you don't need to customize the file upload items:

```
<FileUpload.ItemGroup>
  <FileUpload.Items />
</FileUpload.ItemGroup>
```

### [FileUploadList](#fileuploadlist)

The `FileUploadList` shortcut renders the list of uploaded files. It composes the `FileUpload.ItemGroup` and `FileUpload.Items` components.

```
<FileUpload.List />
```

is the same as:

```
<FileUpload.ItemGroup>
  <FileUpload.Items />
</FileUpload.ItemGroup>
```

[Examples](#examples)
---------------------

### [Accepted Files](#accepted-files)

Define the accepted files for upload using the `accept` prop.

### [Multiple Files](#multiple-files)

Upload multiple files at once by using the `maxFiles` prop.

### [Custom Preview](#custom-preview)

Here's an example of how to show a custom image preview for files.

### [Directory](#directory)

Use the `directory` prop to allow selecting a directory instead of a file.

### [Media Capture](#media-capture)

Use the `capture` prop to select and upload files from different environments and media types.

**Note:** This is [not fully supported](https://caniuse.com/mdn-api_htmlinputelement_capture) in all browsers.

### [Dropzone](#dropzone)

Drop multiple files inside the dropzone and use the `maxFiles` prop to set the number of files that can be uploaded at once.

### [Input](#input)

Use the `FileInput` component to create a trigger that looks like a text input.

### [Clearable](#clearable)

Here's an example of a clearable file upload input.

### [Pasting Files](#pasting-files)

Here's an example of handling files pasted from the clipboard.

### [Store](#store)

An alternative way to control the file upload is to use the `RootProvider` component and the `useFileUpload` store hook.

This way you can access the file upload state and methods from outside the file upload.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`allowDrop`

`true`

`boolean`

Whether to allow drag and drop in the dropzone element

`locale`

`'\'en-US\''`

`string`

The current locale. Based on the BCP 47 definition.

`maxFiles`

`'1'`

`number`

The maximum number of files

`maxFileSize`

`'Infinity'`

`number`

The maximum file size in bytes

`minFileSize`

`'0'`

`number`

The minimum file size in bytes

`preventDocumentDrop`

`true`

`boolean`

Whether to prevent the drop event on the document

`accept`

`Record<string, string[]> | FileMimeType | FileMimeType[]`

The accept file types

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`capture`

`'user' | 'environment'`

The default camera to use when capturing media

`directory`

`boolean`

Whether to accept directories, only works in webkit browsers

`disabled`

`boolean`

Whether the file input is disabled

`ids`

`Partial<{ root: string dropzone: string hiddenInput: string trigger: string label: string item(id: string): string itemName(id: string): string itemSizeText(id: string): string itemPreview(id: string): string }>`

The ids of the elements. Useful for composition.

`invalid`

`boolean`

Whether the file input is invalid

`name`

`string`

The name of the underlying file input

`onFileAccept`

`(details: FileAcceptDetails) => void`

Function called when the file is accepted

`onFileChange`

`(details: FileChangeDetails) => void`

Function called when the value changes, whether accepted or rejected

`onFileReject`

`(details: FileRejectDetails) => void`

Function called when the file is rejected

`required`

`boolean`

Whether the file input is required

`transformFiles`

`(files: File[]) => Promise<File[]>`

Function to transform the accepted files to apply transformations

`translations`

`IntlTranslations`

The localized messages to use.

`validate`

`(file: File, details: FileValidateDetails) => FileError[] | null`

Function to validate a file

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Fieldset



](/docs/components/fieldset)[

Next

Hover Card



](/docs/components/hover-card)