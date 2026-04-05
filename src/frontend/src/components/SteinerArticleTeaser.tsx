import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function getArticleAccent(themeId: string): {
  border: string;
  heading: string;
} {
  if (themeId === "dawn") return { border: "#c8a050", heading: "#6a5040" };
  if (themeId === "forest") return { border: "#5a8868", heading: "#3a5e40" };
  // twilight
  return { border: "rgba(212,160,106,0.75)", heading: "#f5f0e8" };
}

function downloadPrintableArticle() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Color as Soul-Language — Rudolf Steiner</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'DM Sans', Georgia, sans-serif;
      font-weight: 300;
      font-size: 11pt;
      line-height: 1.85;
      color: #1a1410;
      background: #fff;
      max-width: 680px;
      margin: 0 auto;
      padding: 3cm 2cm 4cm;
    }

    @media print {
      body { padding: 2cm 2.5cm; max-width: 100%; }
      a { color: inherit; text-decoration: none; }
    }

    .eyebrow {
      font-size: 7pt;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #7a6555;
      margin-bottom: 1rem;
      opacity: 0.8;
    }

    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 28pt;
      font-weight: 700;
      line-height: 1.15;
      color: #1a1410;
      margin-bottom: 0.5rem;
      letter-spacing: -0.01em;
    }

    .subtitle {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 14pt;
      font-weight: 400;
      color: #4a3828;
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .divider {
      width: 52px;
      height: 2px;
      background: #c8a050;
      border-radius: 2px;
      margin-bottom: 2rem;
    }

    h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 14pt;
      font-weight: 600;
      color: #6a5040;
      margin-top: 2.5rem;
      margin-bottom: 0.85rem;
      page-break-after: avoid;
    }

    p {
      margin-bottom: 1rem;
    }

    blockquote {
      border-left: 3px solid #c8a050;
      padding-left: 1.25rem;
      margin: 2rem 0;
      color: #4a3828;
    }

    blockquote p {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 12pt;
      line-height: 1.65;
      opacity: 0.92;
      margin-bottom: 0;
    }

    em { font-style: italic; }

    .footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid #c8a050;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .footer-line {
      width: 28px;
      height: 2px;
      background: #c8a050;
      border-radius: 2px;
      flex-shrink: 0;
    }

    .footer-text {
      font-size: 7.5pt;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #7a6555;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <p class="eyebrow">Spiritual Color Theory &middot; Rudolf Steiner</p>

  <h1>Color as Soul-Language</h1>
  <p class="subtitle">Rudolf Steiner&rsquo;s Living Theory of Color and Veil Painting</p>
  <div class="divider"></div>

  <h2>Introduction</h2>
  <p>To stand before a living color is, if we are attentive, to feel something stir within us. A warm amber arrests the eye, then draws it outward; a deep blue invites retreat into the self; a field of sage rests the soul in quiet equilibrium. These are not accidental associations, not learned responses, not mere convention. They are, according to Rudolf Steiner, the very language through which the world speaks to the human spirit.</p>
  <p>For Steiner, color does not begin in pigment or wavelength. It arises in the living encounter between light and darkness &mdash; two archetypal forces whose ceaseless interplay constitutes the soul-language of the cosmos. Where light presses against darkness, warmth and radiance emerge: the yellows and reds of dawn, the burning ambers of fire. Where darkness breathes into light, coolness and interiority deepen: the quiet blues of twilight, the still violets of the nocturnal sky. Color is the meeting of these two principles, and every hue carries the signature of that meeting &mdash; active or receptive, outward or inward, expanding or gathering.</p>

  <blockquote>
    <p>&ldquo;Color is the soul of nature and the entire cosmos, and we participate in this soul when we experience color.&rdquo;</p>
  </blockquote>

  <p>This is not a theory about aesthetics in the narrow sense. It is a spiritual phenomenology &mdash; an account of how the inner life of the universe makes itself perceptible through color, and how the inner life of the human being meets it there. Warm colors, from the flame-reds through orange to luminous gold, are experienced as active and stimulating, reaching out toward us with urgency and life. Cool colors &mdash; the greens, blues, and violets &mdash; are calming and inward, creating a space of quietude and depth. Color itself, Steiner insists, can carry mood, character and meaning without relying on a single drawn line or a single fragment of narrative content.</p>

  <h2>Lustre Colors and Image Colors</h2>
  <p>Within Steiner&rsquo;s system, not all colors work in the same way. He draws a fundamental distinction between two great families: the <em>lustre colors</em> (Glanzfarben) and the <em>image colors</em> (Bildfarben). Understanding this distinction is essential to understanding why veil painting proceeds as it does, and why particular color relationships are chosen with such care.</p>
  <p>The lustre colors &mdash; yellow, blue, and red &mdash; are colors from which something shines. They do not depict; they radiate. Yellow is the lustre of spirit: it cannot help but expand, to press outward into space, to illuminate what surrounds it. In the presence of a strong yellow, we feel the proximity of a spiritual force &mdash; clarifying, illuminating, almost weightless. Blue is the lustre of soul: it draws inward, deepening the space behind it, evoking the inner life&rsquo;s capacity for quiet devotion and receptive stillness. Red is the lustre of the living &mdash; not the contemplative but the vital, pulsing at the juncture of spirit and matter, announcing life in its most immediate and incarnate form.</p>
  <p>The image colors occupy a different register. They do not radiate &mdash; they picture. Green is the resting image of life. It neither advances like red nor retreats like blue; it simply is, in the way that living things simply are, neither fully in spirit nor fully in matter but mediating quietly between them. Peach-blossom &mdash; that delicate light flesh-rose Steiner names Pfirsichbl&uuml;te &mdash; is the living image of the soul. It holds the warm, tender quality of ensouled human presence. A figure bathed in peach-blossom radiates a quite different inner gesture than one surrounded by strong green: peach-blossom speaks of interiority and warmth, of the soul that is awake and present within a body; green speaks of life at rest, patient and vegetative. White, in Steiner&rsquo;s view, pictures the image of spirit; black pictures the image of death &mdash; not death as ending but as the absolute negation of light, the ground from which form emerges.</p>

  <blockquote>
    <p>A figure bathed in peach-blossom has a quite different inner gesture than one surrounded by strong green. One speaks of the soul awake within its body; the other, of life resting in quiet self-containment.</p>
  </blockquote>

  <p>This distinction between lustre and image is not merely theoretical. It governs every choice a veil painter makes: which color to lay first, which to follow it, what quality of relationship to cultivate between layers. To work with color consciously is to work with these inwardly felt distinctions &mdash; not as rules imposed from outside, but as perceptions cultivated through sustained practice.</p>

  <h2>What Is Veil Painting?</h2>
  <p>Veil painting &mdash; known also as <em>Lasurmalerei</em>, from the German word for glaze &mdash; was developed within Steiner&rsquo;s circle as a method of working with color not as substance, but as light. Its technical basis is simple: very thin, transparent layers of diluted watercolor or glaze are applied over a luminous white ground, one after another, each layer allowed to dry before the next is added. In principle, the method could hardly be simpler. In practice, it demands a quality of attention that is anything but simple.</p>
  <p>Steiner consistently encouraged the use of transparent watercolors &mdash; not opaque paints, not pastels, not heavy gouache &mdash; because transparent pigment dissolved in water comes closest to the experience of pure colored light. Opaque paint sits on the surface; it blocks. Transparent watercolor behaves like stained glass: the ground shines through it, and each successive layer of color modifies and is modified by every layer beneath. The result, when the veiling is done with skill and sensitivity, is not a surface covered in color but a field of light that seems to hover and breathe &mdash; luminous from within, as if illuminated by its own ground.</p>
  <p>This floating luminosity is the quality Steiner sought to cultivate. It cannot be achieved by mixing colors on the palette and applying them as finished tones; it can only arise through the living accumulation of transparent layers, each one in intimate conversation with the light it modifies and the colors it joins. The finished painting is not a depiction of something seen; it is a record of a process of perception and inner attentiveness.</p>

  <h2>How the Veiling Process Works</h2>
  <p>Different teachers in the Waldorf and anthroposophic tradition teach the practical steps of veiling in somewhat different ways, but the underlying logic is consistent and flows directly from Steiner&rsquo;s color theory.</p>
  <p>The work begins from light. A white ground &mdash; stretched watercolor paper, or a specially prepared board &mdash; is never completely covered. It remains, beneath all subsequent layers, as the source of luminosity to which every veil returns. This is not a technical convenience but a spiritual gesture: light is prior; color arises within it, not against it.</p>
  <p>Colors are then laid on in successive, broadly rhythmic strokes &mdash; the brush fully loaded with very dilute color, moving across the surface in a gesture that is confident and unhurried. Each layer must dry completely before the next is applied, because a wet layer absorbs and muddies what is added to it; only a dry layer allows the next veil to remain transparent and distinct. As the layers accumulate, depths and relationships that were invisible at the outset begin to emerge.</p>
  <p>The choice of successive veils is not calculated by mixing theory but by inner listening. If the ground is prepared with a pale yellow veil, and a blue veil is now applied, green will arise &mdash; not as a pigment mixed in the hand, but as a living experience in the eye. The green thus born is qualitatively different from a green mixed on the palette: it carries, still, the memory of the yellow that preceded it and the blue that came after, and the viewer feels this without necessarily knowing why. This is precisely the quality of green as life-force that Steiner describes: not a fixed color but a relationship, something held between warmth and coolness.</p>
  <p>Forms are not outlined first and then filled. They emerge from the color-field itself as the painter, attending quietly to the relationships developing on the surface, allows certain areas to deepen while others remain light. The figure condenses from the atmosphere; it is not imposed upon it. This is a demanding practice &mdash; it requires the surrender of a controlling intention and a willingness to receive what the colors themselves are asking for.</p>

  <blockquote>
    <p>A veil painting of dawn might begin with pale yellow, then rose-peach, then a cool blue-grey descending from above. No sun is drawn; no horizon is fixed in line. Yet the meeting and interpenetration of these color-relationships creates the mood of dawn with an immediacy no line could achieve.</p>
  </blockquote>

  <p>Transparency and inner mobility must be preserved throughout. Overworking the surface &mdash; returning repeatedly to a damp area, scrubbing, using opaque pigment to correct errors &mdash; deadens the image. An overworked veil painting closes in on itself; it becomes heavy and opaque. The painter must resist the temptation to control and instead cultivate a kind of active patience, trusting the process to arrive where it needs to go.</p>

  <h2>Inner Attitude and Purpose</h2>
  <p>What distinguishes veil painting from other mediums is not only technique but the quality of inner engagement it demands and cultivates. Steiner invites the painter to approach color <em>phenomenologically</em> &mdash; not by analyzing it conceptually, not by consulting a color wheel, but by attending carefully to lived experience: what does this color do in the soul? What does it feel like to apply a broad wash of warm amber? What changes when a cool blue veil is drawn over it?</p>
  <p>Feelings, in this context, are treated not as subjective projections but as a valid organ of perception. When you sit before a field of radiant yellow and notice that your attention expands, that something in you brightens and reaches outward, you are perceiving something real &mdash; not about your personal psychology, but about yellow as a spiritual-perceptible quality. When deep blue draws you inward and quiets your thoughts, that too is perception. You are, Steiner would say, recognizing yellow as the lustre of spirit and blue as the lustre of soul &mdash; not because someone told you so, but because you felt it in the act of sustained attention.</p>
  <p>This is why veil painting is often used in meditative or therapeutic contexts. Sustained, unhurried attention to the arising of color-relationships &mdash; to what forms as one veil follows another, to the unexpected qualities that emerge from their meeting &mdash; has a harmonizing and deepening effect on the inner life. The practice slows the mind, heightens perceptual sensitivity, and cultivates a quality of presence that is both receptive and alert.</p>
  <p>In Waldorf schools and anthroposophic contexts, veil painting is woven into the curriculum from early childhood through adolescence. Children and adults alike learn from color itself: how yellow expands, how blue retreats, how red pulses at the threshold of inwardness and vitality, how layered relationships between these qualities can express soul moods and inner states without a single explanatory word. The practice becomes, over time, a form of literacy &mdash; an ability to read and create meaning in color that is rooted not in convention or symbol, but in the direct experience of what color does in the living soul.</p>
  <p>To paint with color in this spirit &mdash; as soul-language, as living light, as the meeting-place of spirit and matter &mdash; is to participate in something larger than picture-making. It is to attend, with gratitude and care, to one of the ways in which the world continually speaks.</p>

  <div class="footer">
    <div class="footer-line"></div>
    <span class="footer-text">Rudolf Steiner &middot; Anthroposophic Color Theory</span>
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "color-as-soul-language-steiner.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function CloseButton({ onClick }: { onClick: () => void }) {
  const { theme } = useTheme();
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid="steiner-article.close_button"
      aria-label="Close article"
      style={{
        color: theme.textMuted,
        background: theme.cardTint,
        border: `1px solid ${theme.glow}`,
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-6 right-6 z-[9999] w-10 h-10 rounded-full flex items-center justify-center text-lg font-light hover:opacity-80 transition-opacity"
    >
      &times;
    </button>
  );
}

function PullQuote({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  const accent = getArticleAccent(theme.id);
  return (
    <blockquote
      style={{
        borderLeft: `3px solid ${accent.border}`,
        paddingLeft: "1.5rem",
        margin: "2.5rem 0",
        color: theme.textSecondary,
      }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "1.25rem",
          lineHeight: 1.65,
          opacity: 0.92,
        }}
      >
        {children}
      </p>
    </blockquote>
  );
}

function ArticleSection({
  heading,
  children,
  theme,
}: {
  heading: string;
  children: React.ReactNode;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  const accent = getArticleAccent(theme.id);
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "1.55rem",
          fontWeight: 600,
          color: accent.heading,
          marginBottom: "1rem",
          opacity: 0.95,
        }}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

function ArticleParagraph({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  return (
    <p
      style={{
        color: theme.textSecondary,
        fontSize: "1.05rem",
        lineHeight: 1.85,
        marginBottom: "1.25rem",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
      }}
    >
      {children}
    </p>
  );
}

function FullArticleModal({ onClose }: { onClose: () => void }) {
  const { theme } = useTheme();
  const accent = getArticleAccent(theme.id);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const overlayBg =
    theme.id === "twilight"
      ? "linear-gradient(160deg, rgba(18,16,30,0.97) 0%, rgba(28,22,50,0.96) 50%, rgba(38,30,62,0.95) 100%)"
      : theme.groundGradient;

  return (
    <motion.div
      key="article-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9990,
        background: overlayBg,
        overflowY: "auto",
      }}
      data-ocid="steiner-article.modal"
    >
      <CloseButton onClick={onClose} />

      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "6rem 2rem 8rem",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: theme.textMuted,
            marginBottom: "1.25rem",
            fontFamily: "'DM Sans', sans-serif",
            opacity: 0.75,
          }}
        >
          Spiritual Color Theory &middot; Rudolf Steiner
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: theme.textPrimary,
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          Color as Soul-Language
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 400,
            color: theme.textSecondary,
            marginBottom: "2.5rem",
            lineHeight: 1.4,
            opacity: 0.9,
          }}
        >
          Rudolf Steiner&apos;s Living Theory of Color and Veil Painting
        </p>

        {/* Divider */}
        <div
          style={{
            width: "64px",
            height: "2px",
            background: accent.border,
            marginBottom: "2.5rem",
            borderRadius: "2px",
          }}
        />

        {/* Introduction */}
        <ArticleSection heading="Introduction" theme={theme}>
          <ArticleParagraph theme={theme}>
            To stand before a living color is, if we are attentive, to feel
            something stir within us. A warm amber arrests the eye, then draws
            it outward; a deep blue invites retreat into the self; a field of
            sage rests the soul in quiet equilibrium. These are not accidental
            associations, not learned responses, not mere convention. They are,
            according to Rudolf Steiner, the very language through which the
            world speaks to the human spirit.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            For Steiner, color does not begin in pigment or wavelength. It
            arises in the living encounter between light and darkness &mdash;
            two archetypal forces whose ceaseless interplay constitutes the
            soul-language of the cosmos. Where light presses against darkness,
            warmth and radiance emerge: the yellows and reds of dawn, the
            burning ambers of fire. Where darkness breathes into light, coolness
            and interiority deepen: the quiet blues of twilight, the still
            violets of the nocturnal sky. Color is the meeting of these two
            principles, and every hue carries the signature of that meeting
            &mdash; active or receptive, outward or inward, expanding or
            gathering.
          </ArticleParagraph>
          <PullQuote theme={theme}>
            &ldquo;Color is the soul of nature and the entire cosmos, and we
            participate in this soul when we experience color.&rdquo;
          </PullQuote>
          <ArticleParagraph theme={theme}>
            This is not a theory about aesthetics in the narrow sense. It is a
            spiritual phenomenology &mdash; an account of how the inner life of
            the universe makes itself perceptible through color, and how the
            inner life of the human being meets it there. Warm colors, from the
            flame-reds through orange to luminous gold, are experienced as
            active and stimulating, reaching out toward us with urgency and
            life. Cool colors &mdash; the greens, blues, and violets &mdash; are
            calming and inward, creating a space of quietude and depth. Color
            itself, Steiner insists, can carry mood, character and meaning
            without relying on a single drawn line or a single fragment of
            narrative content.
          </ArticleParagraph>
        </ArticleSection>

        {/* Lustre Colors and Image Colors */}
        <ArticleSection heading="Lustre Colors and Image Colors" theme={theme}>
          <ArticleParagraph theme={theme}>
            Within Steiner&apos;s system, not all colors work in the same way.
            He draws a fundamental distinction between two great families: the{" "}
            <em>lustre colors</em> (Glanzfarben) and the <em>image colors</em>{" "}
            (Bildfarben). Understanding this distinction is essential to
            understanding why veil painting proceeds as it does, and why
            particular color relationships are chosen with such care.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            The lustre colors &mdash; yellow, blue, and red &mdash; are colors
            from which something shines. They do not depict; they radiate.
            Yellow is the lustre of spirit: it cannot help but expand, to press
            outward into space, to illuminate what surrounds it. In the presence
            of a strong yellow, we feel the proximity of a spiritual force
            &mdash; clarifying, illuminating, almost weightless. Blue is the
            lustre of soul: it draws inward, deepening the space behind it,
            evoking the inner life&apos;s capacity for quiet devotion and
            receptive stillness. Red is the lustre of the living &mdash; not the
            contemplative but the vital, pulsing at the juncture of spirit and
            matter, announcing life in its most immediate and incarnate form.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            The image colors occupy a different register. They do not radiate
            &mdash; they picture. Green is the resting image of life. It neither
            advances like red nor retreats like blue; it simply is, in the way
            that living things simply are, neither fully in spirit nor fully in
            matter but mediating quietly between them. Peach-blossom &mdash;
            that delicate light flesh-rose Steiner names Pfirsichbl&uuml;te
            &mdash; is the living image of the soul. It holds the warm, tender
            quality of ensouled human presence. A figure bathed in peach-blossom
            radiates a quite different inner gesture than one surrounded by
            strong green: peach-blossom speaks of interiority and warmth, of the
            soul that is awake and present within a body; green speaks of life
            at rest, patient and vegetative. White, in Steiner&apos;s view,
            pictures the image of spirit; black pictures the image of death
            &mdash; not death as ending but as the absolute negation of light,
            the ground from which form emerges.
          </ArticleParagraph>
          <PullQuote theme={theme}>
            A figure bathed in peach-blossom has a quite different inner gesture
            than one surrounded by strong green. One speaks of the soul awake
            within its body; the other, of life resting in quiet
            self-containment.
          </PullQuote>
          <ArticleParagraph theme={theme}>
            This distinction between lustre and image is not merely theoretical.
            It governs every choice a veil painter makes: which color to lay
            first, which to follow it, what quality of relationship to cultivate
            between layers. To work with color consciously is to work with these
            inwardly felt distinctions &mdash; not as rules imposed from
            outside, but as perceptions cultivated through sustained practice.
          </ArticleParagraph>
        </ArticleSection>

        {/* What is Veil Painting */}
        <ArticleSection heading="What Is Veil Painting?" theme={theme}>
          <ArticleParagraph theme={theme}>
            Veil painting &mdash; known also as <em>Lasurmalerei</em>, from the
            German word for glaze &mdash; was developed within Steiner&apos;s
            circle as a method of working with color not as substance, but as
            light. Its technical basis is simple: very thin, transparent layers
            of diluted watercolor or glaze are applied over a luminous white
            ground, one after another, each layer allowed to dry before the next
            is added. In principle, the method could hardly be simpler. In
            practice, it demands a quality of attention that is anything but
            simple.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            Steiner consistently encouraged the use of transparent watercolors
            &mdash; not opaque paints, not pastels, not heavy gouache &mdash;
            because transparent pigment dissolved in water comes closest to the
            experience of pure colored light. Opaque paint sits on the surface;
            it blocks. Transparent watercolor behaves like stained glass: the
            ground shines through it, and each successive layer of color
            modifies and is modified by every layer beneath. The result, when
            the veiling is done with skill and sensitivity, is not a surface
            covered in color but a field of light that seems to hover and
            breathe &mdash; luminous from within, as if illuminated by its own
            ground.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            This floating luminosity is the quality Steiner sought to cultivate.
            It cannot be achieved by mixing colors on the palette and applying
            them as finished tones; it can only arise through the living
            accumulation of transparent layers, each one in intimate
            conversation with the light it modifies and the colors it joins. The
            finished painting is not a depiction of something seen; it is a
            record of a process of perception and inner attentiveness.
          </ArticleParagraph>
        </ArticleSection>

        {/* How the Veiling Process Works */}
        <ArticleSection heading="How the Veiling Process Works" theme={theme}>
          <ArticleParagraph theme={theme}>
            Different teachers in the Waldorf and anthroposophic tradition teach
            the practical steps of veiling in somewhat different ways, but the
            underlying logic is consistent and flows directly from
            Steiner&apos;s color theory.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            The work begins from light. A white ground &mdash; stretched
            watercolor paper, or a specially prepared board &mdash; is never
            completely covered. It remains, beneath all subsequent layers, as
            the source of luminosity to which every veil returns. This is not a
            technical convenience but a spiritual gesture: light is prior; color
            arises within it, not against it.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            Colors are then laid on in successive, broadly rhythmic strokes
            &mdash; the brush fully loaded with very dilute color, moving across
            the surface in a gesture that is confident and unhurried. Each layer
            must dry completely before the next is applied, because a wet layer
            absorbs and muddies what is added to it; only a dry layer allows the
            next veil to remain transparent and distinct. As the layers
            accumulate, depths and relationships that were invisible at the
            outset begin to emerge.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            The choice of successive veils is not calculated by mixing theory
            but by inner listening. If the ground is prepared with a pale yellow
            veil, and a blue veil is now applied, green will arise &mdash; not
            as a pigment mixed in the hand, but as a living experience in the
            eye. The green thus born is qualitatively different from a green
            mixed on the palette: it carries, still, the memory of the yellow
            that preceded it and the blue that came after, and the viewer feels
            this without necessarily knowing why. This is precisely the quality
            of green as life-force that Steiner describes: not a fixed color but
            a relationship, something held between warmth and coolness.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            Forms are not outlined first and then filled. They emerge from the
            color-field itself as the painter, attending quietly to the
            relationships developing on the surface, allows certain areas to
            deepen while others remain light. The figure condenses from the
            atmosphere; it is not imposed upon it. This is a demanding practice
            &mdash; it requires the surrender of a controlling intention and a
            willingness to receive what the colors themselves are asking for.
          </ArticleParagraph>
          <PullQuote theme={theme}>
            A veil painting of dawn might begin with pale yellow, then
            rose-peach, then a cool blue-grey descending from above. No sun is
            drawn; no horizon is fixed in line. Yet the meeting and
            interpenetration of these color-relationships creates the mood of
            dawn with an immediacy no line could achieve.
          </PullQuote>
          <ArticleParagraph theme={theme}>
            Transparency and inner mobility must be preserved throughout.
            Overworking the surface &mdash; returning repeatedly to a damp area,
            scrubbing, using opaque pigment to correct errors &mdash; deadens
            the image. An overworked veil painting closes in on itself; it
            becomes heavy and opaque. The painter must resist the temptation to
            control and instead cultivate a kind of active patience, trusting
            the process to arrive where it needs to go.
          </ArticleParagraph>
        </ArticleSection>

        {/* Inner Attitude and Purpose */}
        <ArticleSection heading="Inner Attitude and Purpose" theme={theme}>
          <ArticleParagraph theme={theme}>
            What distinguishes veil painting from other mediums is not only
            technique but the quality of inner engagement it demands and
            cultivates. Steiner invites the painter to approach color{" "}
            <em>phenomenologically</em> &mdash; not by analyzing it
            conceptually, not by consulting a color wheel, but by attending
            carefully to lived experience: what does this color do in the soul?
            What does it feel like to apply a broad wash of warm amber? What
            changes when a cool blue veil is drawn over it?
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            Feelings, in this context, are treated not as subjective projections
            but as a valid organ of perception. When you sit before a field of
            radiant yellow and notice that your attention expands, that
            something in you brightens and reaches outward, you are perceiving
            something real &mdash; not about your personal psychology, but about
            yellow as a spiritual-perceptible quality. When deep blue draws you
            inward and quiets your thoughts, that too is perception. You are,
            Steiner would say, recognizing yellow as the lustre of spirit and
            blue as the lustre of soul &mdash; not because someone told you so,
            but because you felt it in the act of sustained attention.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            This is why veil painting is often used in meditative or therapeutic
            contexts. Sustained, unhurried attention to the arising of
            color-relationships &mdash; to what forms as one veil follows
            another, to the unexpected qualities that emerge from their meeting
            &mdash; has a harmonizing and deepening effect on the inner life.
            The practice slows the mind, heightens perceptual sensitivity, and
            cultivates a quality of presence that is both receptive and alert.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            In Waldorf schools and anthroposophic contexts, veil painting is
            woven into the curriculum from early childhood through adolescence.
            Children and adults alike learn from color itself: how yellow
            expands, how blue retreats, how red pulses at the threshold of
            inwardness and vitality, how layered relationships between these
            qualities can express soul moods and inner states without a single
            explanatory word. The practice becomes, over time, a form of
            literacy &mdash; an ability to read and create meaning in color that
            is rooted not in convention or symbol, but in the direct experience
            of what color does in the living soul.
          </ArticleParagraph>
          <ArticleParagraph theme={theme}>
            To paint with color in this spirit &mdash; as soul-language, as
            living light, as the meeting-place of spirit and matter &mdash; is
            to participate in something larger than picture-making. It is to
            attend, with gratitude and care, to one of the ways in which the
            world continually speaks.
          </ArticleParagraph>
        </ArticleSection>

        {/* Footer divider + download */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${accent.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {/* Attribution */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: accent.border,
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: theme.textMuted,
                  opacity: 0.65,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Rudolf Steiner &middot; Anthroposophic Color Theory
              </p>
            </div>

            {/* Download link */}
            <button
              type="button"
              onClick={downloadPrintableArticle}
              data-ocid="steiner-article.download_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent.border,
                fontFamily: "'DM Sans', sans-serif",
                background: "none",
                border: `1px solid ${accent.border}`,
                borderRadius: "6px",
                padding: "0.45rem 0.9rem",
                cursor: "pointer",
                opacity: 0.85,
                transition: "opacity 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download printable version
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function SteinerArticleTeaser() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const cardStyle: React.CSSProperties = {
    background: theme.cardTint,
    backdropFilter: "blur(20px) saturate(1.4)",
    WebkitBackdropFilter: "blur(20px) saturate(1.4)",
    border: `1px solid ${theme.glow}`,
    boxShadow: `0 8px 48px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
    borderRadius: "20px",
    padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 5vw, 3rem)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <>
      {/* Teaser section */}
      <section
        className="px-6 py-16"
        style={{ color: theme.textPrimary }}
        data-ocid="steiner-article.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              data-ocid="steiner-article.open_modal_button"
              className="w-full text-left group"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <div style={cardStyle} className="group-hover:scale-[1.01]">
                {/* Eyebrow */}
                <p
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: theme.textMuted,
                    marginBottom: "1rem",
                    fontFamily: "'DM Sans', sans-serif",
                    opacity: 0.75,
                  }}
                >
                  In Depth &middot; Spiritual Color Theory
                </p>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.4rem, 3.5vw, 2.15rem)",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: theme.textPrimary,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                    transition: "opacity 0.2s ease",
                  }}
                  className="group-hover:opacity-75"
                >
                  Color as Soul-Language: Rudolf Steiner&apos;s Living Theory of
                  Color and Veil Painting
                </h2>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    lineHeight: 1.8,
                    color: theme.textSecondary,
                    fontWeight: 300,
                    marginBottom: "1.75rem",
                    maxWidth: "600px",
                    opacity: 0.9,
                  }}
                >
                  Rudolf Steiner understood color not as decorative surface, but
                  as living, soul-active force &mdash; the very language through
                  which light and darkness speak to the human spirit. His theory
                  distinguishes &ldquo;lustre colors&rdquo; (yellow, blue, red)
                  that radiate inwardly felt qualities of spirit, soul, and
                  life, from &ldquo;image colors&rdquo; (green, peach-blossom,
                  white, black) that picture states of existence. From this
                  foundation grows the practice of veil painting: translucent
                  layers of color built slowly over light, each veil chosen for
                  its inner relationship to what came before.
                </p>

                {/* Read link */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.82rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: theme.textMuted,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Read the full article
                  <span
                    style={{
                      fontSize: "1rem",
                      opacity: 0.7,
                      transition: "transform 0.25s ease",
                      display: "inline-block",
                    }}
                    className="group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Full article modal */}
      <AnimatePresence>
        {isOpen && <FullArticleModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
