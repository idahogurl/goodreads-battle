**Description**

React and Redux application where the user can enter two GoodReads users to get a comparison. The number of books read, reading, and to-read are shown for each entered user. Uses GoodReads API to obtain the data.

**Sample Response**

```xml<GoodreadsResponse>
<Request>
<authentication>true</authentication>
<key>
<![CDATA[ 6eoeJFquKDi5FAsBFdqGg ]]>
</key>
<method>
<![CDATA[ user_show ]]>
</method>
</Request>
<user>
<id>639222</id>
<name>Paula C</name>
<user_name>Paula</user_name>
<link>
<![CDATA[ https://www.goodreads.com/user/show/639222-paula-c ]]>
</link>
<image_url>
<![CDATA[
https://s.gr-assets.com/assets/nophoto/user/f_111x148-8060b12280b2aec7543bafb574ee8422.png
]]>
</image_url>
<small_image_url>
<![CDATA[
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
]]>
</small_image_url>
<about/>
<age/>
<gender/>
<location>Fayetteville, NC</location>
<website/>
<joined>11/2007</joined>
<last_active>03/2008</last_active>
<interests/>
<favorite_books/>
<favorite_authors></favorite_authors>
<updates_rss_url>
<![CDATA[
https://www.goodreads.com/user/updates_rss/639222?key=KUyP8TR2PRMsG6LwL3yg4cq2u8TGf5T1Kb-pxtgk9QYyvQiI
]]>
</updates_rss_url>
<reviews_rss_url>
<![CDATA[
https://www.goodreads.com/review/list_rss/639222?key=KUyP8TR2PRMsG6LwL3yg4cq2u8TGf5T1Kb-pxtgk9QYyvQiI&shelf=%23ALL%23
]]>
</reviews_rss_url>
<friends_count type='integer'>2</friends_count>
<groups_count>0</groups_count>
<reviews_count type='integer'>14</reviews_count>
<user_shelves type='array'>
<user_shelf>
<id type='integer'>6667630</id>
<name>read</name>
<book_count type='integer'>13</book_count>
<exclusive_flag type='boolean'>true</exclusive_flag>
<description nil='true'/>
<sort nil='true'/>
<order nil='true'/>
<per_page type='integer' nil='true'/>
<display_fields/>
<featured type='boolean'>true</featured>
<recommend_for type='boolean'>true</recommend_for>
<sticky type='boolean' nil='true'/>
</user_shelf>
<user_shelf>
<id type='integer'>1272976</id>
<name>currently-reading</name>
<book_count type='integer'>1</book_count>
<exclusive_flag type='boolean'>true</exclusive_flag>
<description nil='true'/>
<sort nil='true'/>
<order nil='true'/>
<per_page type='integer' nil='true'/>
<display_fields/>
<featured type='boolean'>false</featured>
<recommend_for type='boolean'>true</recommend_for>
<sticky type='boolean' nil='true'/>
</user_shelf>
<user_shelf>
<id type='integer'>1272975</id>
<name>to-read</name>
<book_count type='integer'>0</book_count>
<exclusive_flag type='boolean'>true</exclusive_flag>
<description nil='true'/>
<sort nil='true'/>
<order>a</order>
<per_page type='integer' nil='true'/>
<display_fields/>
<featured type='boolean'>false</featured>
<recommend_for type='boolean'>true</recommend_for>
<sticky type='boolean' nil='true'/>
</user_shelf>
</user_shelves>
<updates type='array'>
<update type='friend'>
<action_text>is now friends with Kat</action_text>
<link>https://www.goodreads.com/user/show/262255-kat</link>
<image_url>
https://images.gr-assets.com/users/1458623850p2/262255.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Sun, 16 Mar 2008 09:16:29 -0700</updated_at>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 4 stars to <a href='https://www.goodreads.com/book/show/89221.The_Poems_of_Catullus'>The Poems of Catullus (Hardcover)</a> by <a href='https://www.goodreads.com/author/show/51220.Catullus'>Catullus</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10642114</link>
<image_url>
https://images.gr-assets.com/books/1347763496s/89221.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Tue, 18 Dec 2007 13:19:15 -0800</updated_at>
<action type='rating'>
<rating>4</rating>
</action>
<object>
<book>
<id>89221</id>
<title>The Poems of Catullus</title>
<link>
https://www.goodreads.com/book/show/89221.The_Poems_of_Catullus
</link>
<authors>
<author>
<id>51220</id>
<name>Catullus</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1257102543p5/51220.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1257102543p2/51220.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/51220.Catullus
]]>
</link>
<average_rating>4.09</average_rating>
<ratings_count>8152</ratings_count>
<text_reviews_count>315</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 4 stars to <a href='https://www.goodreads.com/book/show/30119.Where_the_Sidewalk_Ends'>Where the Sidewalk Ends (Hardcover)</a> by <a href='https://www.goodreads.com/author/show/435477.Shel_Silverstein'>Shel Silverstein</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405465</link>
<image_url>
https://images.gr-assets.com/books/1168052448s/30119.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:22:11 -0800</updated_at>
<action type='rating'>
<rating>4</rating>
</action>
<object>
<book>
<id>30119</id>
<title>Where the Sidewalk Ends</title>
<link>
https://www.goodreads.com/book/show/30119.Where_the_Sidewalk_Ends
</link>
<authors>
<author>
<id>435477</id>
<name>Shel Silverstein</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1201029128p5/435477.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1201029128p2/435477.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/435477.Shel_Silverstein
]]>
</link>
<average_rating>4.32</average_rating>
<ratings_count>2241972</ratings_count>
<text_reviews_count>31201</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 5 stars to <a href='https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth'>The Phantom Tollbooth (Paperback)</a> by <a href='https://www.goodreads.com/author/show/214.Norton_Juster'>Norton Juster</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405420</link>
<image_url>
https://images.gr-assets.com/books/1438887022s/378.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:19:20 -0800</updated_at>
<action type='rating'>
<rating>5</rating>
</action>
<object>
<book>
<id>378</id>
<title>The Phantom Tollbooth</title>
<link>
https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth
</link>
<authors>
<author>
<id>214</id>
<name>Norton Juster</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1201117378p5/214.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1201117378p2/214.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/214.Norton_Juster
]]>
</link>
<average_rating>4.20</average_rating>
<ratings_count>198438</ratings_count>
<text_reviews_count>9702</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 3 stars to <a href='https://www.goodreads.com/book/show/386187.Midnight_in_the_Garden_of_Good_and_Evil'>Midnight in the Garden of Good and Evil (Paperback)</a> by <a href='https://www.goodreads.com/author/show/4952.John_Berendt'>John Berendt</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405417</link>
<image_url>
https://images.gr-assets.com/books/1427166915s/386187.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:18:59 -0800</updated_at>
<action type='rating'>
<rating>3</rating>
</action>
<object>
<book>
<id>386187</id>
<title>
<![CDATA[ Midnight in the Garden of Good and Evil ]]>
</title>
<link>
https://www.goodreads.com/book/show/386187.Midnight_in_the_Garden_of_Good_and_Evil
</link>
<authors>
<author>
<id>4952</id>
<name>John Berendt</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1204661056p5/4952.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1204661056p2/4952.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/4952.John_Berendt
]]>
</link>
<average_rating>3.89</average_rating>
<ratings_count>201921</ratings_count>
<text_reviews_count>8472</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 4 stars to <a href='https://www.goodreads.com/book/show/4137.Me_Talk_Pretty_One_Day'>Me Talk Pretty One Day (Paperback)</a> by <a href='https://www.goodreads.com/author/show/2849.David_Sedaris'>David Sedaris</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405413</link>
<image_url>
https://images.gr-assets.com/books/1431013639s/4137.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:18:36 -0800</updated_at>
<action type='rating'>
<rating>4</rating>
</action>
<object>
<book>
<id>4137</id>
<title>Me Talk Pretty One Day</title>
<link>
https://www.goodreads.com/book/show/4137.Me_Talk_Pretty_One_Day
</link>
<authors>
<author>
<id>2849</id>
<name>David Sedaris</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1213737698p5/2849.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1213737698p2/2849.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/2849.David_Sedaris
]]>
</link>
<average_rating>3.98</average_rating>
<ratings_count>1433218</ratings_count>
<text_reviews_count>57606</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 4 stars to <a href='https://www.goodreads.com/book/show/77203.The_Kite_Runner'>The Kite Runner (Paperback)</a> by <a href='https://www.goodreads.com/author/show/569.Khaled_Hosseini'>Khaled Hosseini</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405409</link>
<image_url>
https://images.gr-assets.com/books/1484565687s/77203.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:17:58 -0800</updated_at>
<action type='rating'>
<rating>4</rating>
</action>
<object>
<book>
<id>77203</id>
<title>The Kite Runner</title>
<link>
https://www.goodreads.com/book/show/77203.The_Kite_Runner
</link>
<authors>
<author>
<id>569</id>
<name>Khaled Hosseini</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1359753468p5/569.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1359753468p2/569.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/569.Khaled_Hosseini
]]>
</link>
<average_rating>4.26</average_rating>
<ratings_count>3031241</ratings_count>
<text_reviews_count>131417</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 4 stars to <a href='https://www.goodreads.com/book/show/1885.Pride_and_Prejudice'>Pride and Prejudice (Paperback)</a> by <a href='https://www.goodreads.com/author/show/1265.Jane_Austen'>Jane Austen</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405406</link>
<image_url>
https://images.gr-assets.com/books/1320399351s/1885.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:17:28 -0800</updated_at>
<action type='rating'>
<rating>4</rating>
</action>
<object>
<book>
<id>1885</id>
<title>Pride and Prejudice</title>
<link>
https://www.goodreads.com/book/show/1885.Pride_and_Prejudice
</link>
<authors>
<author>
<id>1265</id>
<name>Jane Austen</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1380085320p5/1265.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1380085320p2/1265.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/1265.Jane_Austen
]]>
</link>
<average_rating>4.10</average_rating>
<ratings_count>4648097</ratings_count>
<text_reviews_count>126380</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
<update type='review'>
<action_text>
<![CDATA[
gave 3 stars to <a href='https://www.goodreads.com/book/show/65285.The_Death_of_Vishnu'>The Death of Vishnu (Paperback)</a> by <a href='https://www.goodreads.com/author/show/36857.Manil_Suri'>Manil Suri</a>
]]>
</action_text>
<link>https://www.goodreads.com/review/show/10405403</link>
<image_url>
https://images.gr-assets.com/books/1390543039s/65285.jpg
</image_url>
<actor>
<id type='integer'>639222</id>
<name>Paula C</name>
<image_url>
https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
</image_url>
<link>https://www.goodreads.com/user/show/639222-paula-c</link>
</actor>
<updated_at>Thu, 13 Dec 2007 23:17:08 -0800</updated_at>
<action type='rating'>
<rating>3</rating>
</action>
<object>
<book>
<id>65285</id>
<title>The Death of Vishnu</title>
<link>
https://www.goodreads.com/book/show/65285.The_Death_of_Vishnu
</link>
<authors>
<author>
<id>36857</id>
<name>Manil Suri</name>
<role/>
<image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1358385549p5/36857.jpg
]]>
</image_url>
<small_image_url nophoto='false'>
<![CDATA[
https://images.gr-assets.com/authors/1358385549p2/36857.jpg
]]>
</small_image_url>
<link>
<![CDATA[
https://www.goodreads.com/author/show/36857.Manil_Suri
]]>
</link>
<average_rating>3.54</average_rating>
<ratings_count>10243</ratings_count>
<text_reviews_count>935</text_reviews_count>
</author>
</authors>
</book>
</object>
</update>
</updates>
<user_statuses></user_statuses>
</user>
</GoodreadsResponse>```
