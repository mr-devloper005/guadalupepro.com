import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { ShareButton } from "@/components/profile/share-button";
import { Link2, Award, Shield, MessageSquare, FileText, Star, ExternalLink } from "lucide-react";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return `<p>${escapeHtml(fallback)}</p>`;
  if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
  return source
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
    .join("");
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}


export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const profileUrl = `${baseUrl}/profile/${post.slug}`;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: profileUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarShell />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Profile Banner */}
        <Card className="mb-6 overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <CardContent className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-lg">
                  {logoUrl ? (
                    <ContentImage src={logoUrl} alt={post.title} fill className="object-cover" sizes="128px" intrinsicWidth={128} intrinsicHeight={128} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-gray-400">
                      {post.title.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">{brandName}</h1>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Shield className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                  {domain && (
                    <p className="text-sm text-gray-600 mt-1">{domain}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <ShareButton url={profileUrl} />
                {website && (
                  <Button size="sm" asChild>
                    <Link href={website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Tabs Section */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="posts" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="posts" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Posts
                    </TabsTrigger>
                    <TabsTrigger value="comments" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Comments
                    </TabsTrigger>
                    <TabsTrigger value="replies" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Replies
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Reviews
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="posts" className="mt-6">
                    <div className="text-center py-12">
                      <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No posts published yet</h3>
                      <p className="text-sm text-gray-500">This profile hasn't published any posts yet.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="comments" className="mt-6">
                    <div className="text-center py-12">
                      <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No comments yet</h3>
                      <p className="text-sm text-gray-500">This profile hasn't commented yet.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="replies" className="mt-6">
                    <div className="text-center py-12">
                      <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No replies yet</h3>
                      <p className="text-sm text-gray-500">This profile hasn't replied yet.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <div className="text-center py-12">
                      <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                      <p className="text-sm text-gray-500">This profile hasn't reviewed anything yet.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <article
                  className="prose prose-slate max-w-none text-sm leading-relaxed prose-p:my-3 prose-a:text-primary prose-a:underline prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">

            {/* Links */}
            {website && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-4 w-4" />
                    Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {domain || 'Official Website'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Suggested Articles */}
            {suggestedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {suggestedArticles.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      href={buildPostUrl("article", article.slug)}
                      className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{article.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{article.summary}</p>
                    </Link>
                  ))}
                  <Link href="/articles" className="text-sm text-primary hover:underline block text-center pt-2">
                    View all articles
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
