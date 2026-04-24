"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Plus, Save, Sparkles } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/auth-context";
import { CATEGORY_OPTIONS } from "@/lib/categories";
import { SITE_CONFIG, type TaskKey } from "@/lib/site-config";
import { addLocalPost } from "@/lib/local-posts";

type Field = {
  key: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "url"
    | "number"
    | "tags"
    | "images"
    | "highlights"
    | "category"
    | "file";
  placeholder?: string;
  required?: boolean;
};

const FORM_CONFIG: Record<TaskKey, { title: string; description: string; fields: Field[] }> = {
  listing: {
    title: "Create Business Listing",
    description: "Add a local-only listing with business details.",
    fields: [
      { key: "title", label: "Listing title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Full description", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "logo", label: "Logo URL", type: "url" },
      { key: "images", label: "Gallery images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  classified: {
    title: "Create Classified",
    description: "Add a local-only classified ad.",
    fields: [
      { key: "title", label: "Ad title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Ad details", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "images", label: "Images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  article: {
    title: "Create Article",
    description: "Write a local-only article post.",
    fields: [
      { key: "title", label: "Article title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Article content (HTML allowed)", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  image: {
    title: "Create Image Share",
    description: "Share image-only content locally.",
    fields: [
      { key: "title", label: "Image title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Caption", type: "textarea" },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images", required: true },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  profile: {
    title: "Create your profile",
    description:
      "Add your public identity: brand name, story, logo, and website. Preview is saved locally in your browser.",
    fields: [
      { key: "brandName", label: "Brand name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the brand", type: "textarea" },
      { key: "website", label: "Website URL", type: "url", required: true },
      { key: "logo", label: "Logo URL", type: "url", required: true },
    ],
  },
  social: {
    title: "Create Social Post",
    description: "Publish a local-only social update.",
    fields: [
      { key: "title", label: "Post title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Post content", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  sbm: {
    title: "Create Bookmark",
    description: "Submit a local-only social bookmark.",
    fields: [
      { key: "title", label: "Bookmark title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Why it’s useful", type: "textarea" },
      { key: "website", label: "Target URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  pdf: {
    title: "Create PDF Entry",
    description: "Add a local-only PDF resource.",
    fields: [
      { key: "title", label: "PDF title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Description", type: "textarea" },
      { key: "fileUrl", label: "PDF file URL", type: "file", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover image", type: "images" },
    ],
  },
  org: {
    title: "Create Organization",
    description: "Create a local-only organization profile.",
    fields: [
      { key: "brandName", label: "Organization name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the organization", type: "textarea" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "logo", label: "Logo URL", type: "url" },
    ],
  },
  comment: {
    title: "Create Blog Comment",
    description: "Store a local-only blog comment entry.",
    fields: [
      { key: "title", label: "Comment title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Comment body", type: "textarea", required: true },
      { key: "website", label: "Target post URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
    ],
  },
};

export default function CreateTaskPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const taskKey = params?.task as TaskKey;

  const taskConfig = useMemo(
    () => SITE_CONFIG.tasks.find((task) => task.key === taskKey && task.enabled),
    [taskKey]
  );
  const formConfig = FORM_CONFIG[taskKey];

  const [values, setValues] = useState<Record<string, string>>({});
  const [uploadingPdf, setUploadingPdf] = useState(false);

  if (!taskConfig || !formConfig) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <NavbarShell />
        <section className="relative overflow-hidden bg-[#1b2b6b] py-20 text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,#f5b014_0,transparent_40%)]" />
          <div className="relative mx-auto max-w-lg px-4 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-[#f5b014]" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight">This type isn&apos;t available</h1>
            <p className="mt-4 text-sm leading-7 text-white/75">
              This content type is not enabled on {SITE_CONFIG.name}. Head home or open an allowed section.
            </p>
            <Button className="mt-8 rounded-full bg-[#f5b014] px-8 font-bold text-[#1b2b6b] hover:bg-[#e0a00f]" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </section>
        <footer className="border-t border-slate-200 bg-[#1b2b6b] py-10 text-center text-sm text-white/70">
          <p className="font-semibold text-white">{SITE_CONFIG.name}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-[#f5b014] hover:underline">
              Home
            </Link>
            <Link href="/profile" className="text-white/80 hover:text-[#f5b014]">
              Browse profiles
            </Link>
          </div>
        </footer>
      </div>
    );
  }

  const updateValue = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in before creating content.",
      });
      router.push("/login");
      return;
    }

    const missing = formConfig.fields.filter((field) => field.required && !values[field.key]);
    if (missing.length) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields before saving.",
      });
      return;
    }

    const title = values.title || values.brandName || "Untitled";
    const summary = values.summary || "";
    const contentType = taskConfig.contentType || taskKey;

    const content: Record<string, unknown> = {
      type: contentType,
    };

    if (values.category) content.category = values.category;
    if (values.description) content.description = values.description;
    if (values.website) content.website = values.website;
    if (values.email) content.email = values.email;
    if (values.phone) content.phone = values.phone;
    if (values.address) content.address = values.address;
    if (values.location) content.location = values.location;
    if (values.logo) content.logo = values.logo;
    if (values.fileUrl) content.fileUrl = values.fileUrl;
    if (values.brandName) content.brandName = values.brandName;

    const highlights = values.highlights
      ? values.highlights.split(",").map((item) => item.trim()).filter(Boolean)
      : [];
    if (highlights.length) content.highlights = highlights;

    const tags = values.tags
      ? values.tags.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const images = values.images
      ? values.images.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const post = addLocalPost({
      task: taskKey,
      title,
      summary,
      authorName: user.name,
      tags,
      content,
      media: images.map((url) => ({ url, type: "IMAGE" })),
      publishedAt: new Date().toISOString(),
    });

    toast({
      title: "Saved locally",
      description: "This post is stored only in your browser.",
    });

    router.push(`/local/${taskKey}/${post.slug}`);
  };

  const tips = [
    "Required fields are marked with a red asterisk (*).",
    "Saves as a local preview in this browser only — sign in if prompted.",
    `After saving, you’ll open your draft on the local ${taskConfig.label} view.`,
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#1b2b6b] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_18%_22%,#f5b014_0,transparent_38%),radial-gradient(circle_at_82%_60%,#ffffff_0,transparent_32%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24">
          <Link
            href={taskConfig.route || "/"}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-[#f5b014]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {taskConfig.label}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge className="border-0 bg-white/15 text-white hover:bg-white/20">{taskConfig.label}</Badge>
            <Badge variant="outline" className="border-white/35 bg-transparent text-white/90">
              Local preview
            </Badge>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{formConfig.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{formConfig.description}</p>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="-mt-14 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(27,43,107,0.12)] sm:p-10">
            <div className="h-1 w-14 rounded-full bg-[#f5b014]" />
            <h2 className="mt-5 text-lg font-bold text-[#1b2b6b]">Fill in the form</h2>
            <p className="mt-1 text-sm text-slate-500">Use clear titles and short summaries so your card looks great in the grid.</p>

            <div className="mt-8 grid gap-6">
              {formConfig.fields.map((field) => (
                <div key={field.key} className="grid gap-2">
                  <Label className="text-sm font-semibold text-slate-800">
                    {field.label} {field.required ? <span className="text-red-500">*</span> : null}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      rows={4}
                      placeholder={field.placeholder}
                      value={values[field.key] || ""}
                      onChange={(event) => updateValue(field.key, event.target.value)}
                      className="rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-900 focus-visible:border-[#1b2b6b] focus-visible:ring-2 focus-visible:ring-[#1b2b6b]/20"
                    />
                  ) : field.type === "category" ? (
                    <select
                      value={values[field.key] || ""}
                      onChange={(event) => updateValue(field.key, event.target.value)}
                      className="h-11 rounded-xl border-2 border-slate-200 bg-white px-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:border-[#1b2b6b] focus-visible:ring-2 focus-visible:ring-[#1b2b6b]/20"
                    >
                      <option value="">Select category</option>
                      {CATEGORY_OPTIONS.map((option) => (
                        <option key={option.slug} value={option.slug}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "file" ? (
                    <div className="grid gap-3">
                      <Input
                        type="file"
                        accept="application/pdf"
                        className="cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/80 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1b2b6b] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-[#1b2b6b]"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (!file) return;
                          if (file.type !== "application/pdf") {
                            toast({
                              title: "Invalid file",
                              description: "Please upload a PDF file.",
                            });
                            return;
                          }
                          const reader = new FileReader();
                          setUploadingPdf(true);
                          reader.onload = () => {
                            const result = typeof reader.result === "string" ? reader.result : "";
                            updateValue(field.key, result);
                            setUploadingPdf(false);
                            toast({
                              title: "PDF uploaded",
                              description: "File is stored locally.",
                            });
                          };
                          reader.readAsDataURL(file);
                        }}
                      />
                      <Input
                        type="text"
                        placeholder="Or paste a PDF URL"
                        value={values[field.key] || ""}
                        onChange={(event) => updateValue(field.key, event.target.value)}
                        className="h-11 rounded-xl border-2 border-slate-200 bg-white focus-visible:border-[#1b2b6b] focus-visible:ring-2 focus-visible:ring-[#1b2b6b]/20"
                      />
                      {uploadingPdf ? (
                        <p className="text-xs text-slate-500">Uploading PDF…</p>
                      ) : null}
                    </div>
                  ) : (
                    <Input
                      type={field.type === "number" ? "number" : "text"}
                      placeholder={
                        field.type === "images" || field.type === "tags" || field.type === "highlights"
                          ? "Separate values with commas"
                          : field.placeholder
                      }
                      value={values[field.key] || ""}
                      onChange={(event) => updateValue(field.key, event.target.value)}
                      className="h-11 rounded-xl border-2 border-slate-200 bg-white focus-visible:border-[#1b2b6b] focus-visible:ring-2 focus-visible:ring-[#1b2b6b]/20"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-100 pt-8">
              <Button
                onClick={handleSubmit}
                className="rounded-full bg-[#f5b014] px-8 font-bold text-[#1b2b6b] shadow-md hover:bg-[#e0a00f]"
              >
                <Save className="mr-2 h-4 w-4" />
                Save locally
              </Button>
              <Button variant="outline" asChild className="rounded-full border-2 border-slate-200 bg-white font-semibold text-[#1b2b6b] hover:border-[#1b2b6b] hover:bg-slate-50">
                <Link href={taskConfig.route}>
                  <Plus className="mr-2 h-4 w-4" />
                  View {taskConfig.label}
                </Link>
              </Button>
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b2b6b]">Quick tips</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f5b014]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1b2b6b]/15 bg-[#1b2b6b] p-6 text-white">
              <Sparkles className="h-6 w-6 text-[#f5b014]" />
              <p className="mt-3 text-sm font-semibold leading-6 text-white/90">
                Need an account? Sign in first — then your name appears as the author on this preview.
              </p>
              <Button
                variant="secondary"
                className="mt-4 w-full rounded-full border-0 bg-[#f5b014] font-bold text-[#1b2b6b] hover:bg-[#e0a00f]"
                asChild
              >
                <Link href="/login">Sign in</Link>
              </Button>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-[#1b2b6b] py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold">{SITE_CONFIG.name}</p>
            <p className="mt-1 text-xs text-white/60">Local preview — drafts stay in this browser until you publish.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="font-semibold text-[#f5b014] hover:underline">
              Home
            </Link>
            <Link href={taskConfig.route} className="text-white/80 hover:text-[#f5b014]">
              View {taskConfig.label}
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-[#f5b014]">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
