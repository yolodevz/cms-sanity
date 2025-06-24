import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("faq").title("FAQs"),
          S.listItem()
              .id("siteSettings")
              .schemaType("siteSettings")
              .title("Site Settings")
              .child(
                  S.editor()
                      .id("siteSettings")
                      .schemaType("siteSettings")
                      .documentId("siteSettings")
              ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'page', 'faq', "siteSettings",].includes(item.getId()!),
      ),
    ])
