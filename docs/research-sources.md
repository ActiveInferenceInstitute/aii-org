# Research-page source verification

Verified on **2026-10-21**. Scope: the 12 entries in `pages/research.html` at the start of this investigation, three newer candidates, and replacements for the broken research and fellowship links. This is an implementation brief; no website edits are part of this work.

## Method and evidence limits

Primary evidence comes from publisher records, Crossref's DOI API, Zenodo's record API, OSF's preprint and file APIs, publisher-supplied full text in Europe PMC, official conference programmes, and author/Institute repositories. Search results were used to discover these sources, not to establish authorship or affiliation. All access observations below refer to the verification date above.

Crossref queries used `https://api.crossref.org/works/{DOI}`. An HTTP 200 response with matching title, authors, dates, type, and publisher URL establishes the registered citation; it does not establish that a publisher's full text is freely accessible. Zenodo records used `https://zenodo.org/api/records/{ID}`. Their depositor-selected resource types do not independently establish peer review. A check of the GNN DOI in Crossref returned 404 while its Zenodo record and API returned 200: absence from Crossref must not be treated as absence of a DOI.

For OSF, the public HTML pages returned HTTP 200 but only an application shell to the text client. The JSON APIs and PDF downloads supplied the substantive evidence. OSF's `is_published` field means publicly posted on the preprint service, not published in a journal. Explicit linked publication DOIs are reported separately.

MDPI pages returned 429 through the web reader and 403 through direct DOI resolution; publisher-supplied Europe PMC XML returned 200 and supplied the bibliographic and affiliation evidence. ScienceDirect article pages returned 403 in the web reader; Elsevier DOI targets returned 200 redirect pages, which are not full-text access. IOP was blocked by the web reader's robots policy; direct resolution returned a generic page titled `Search`. These limitations are retained below rather than called broken publications.

PDF title-page text was extracted in memory with `pdftotext`; successful downloads had a PDF signature, extraction exited 0, and stderr was empty. This was bibliographic inspection, not a scientific-validity or layout review. No research result, affiliation, or peer-review status is inferred from an author's name, current position, or repository ownership alone.

## Changes to prioritise

1. Replace each repeated `/research` publication link with its own DOI or versioned repository record below.
2. Correct authorship and title mismatches, especially the Institute overview, the omitted Chris Fields credit, the ant-paper titles, and the conflated State talk/preprint.
3. Use publication year for publications: the IWAI 2022 Blockference proceedings chapter was published in 2023. Distinguish the 2020 Teams preprint from its 2021 poster presentation.
4. Label journal articles, proceedings chapters, preprints, Institute/Zenodo manuscripts, and transcripts explicitly. Do not make the whole list appear peer reviewed.
5. Add the two 2024 journal articles below; optionally add the 2025 Institute overview as a separately labelled organisational update.
6. Replace the broken fellowship and programme URLs with the verified destinations in the final section. Remove any promise of a complete publication list unless an actual complete list is supplied.

## Existing entries, in their original page order

### E01. The Active Inference Institute and Active Inference Ecosystem

- **Exact title:** *The Active Inference Institute and Active Inference Ecosystem*.
- **Creators, in record order:** Active Inference Institute; Ander Aguirre; John Boik; Libor Burian; Matthew Brown; RJ Cordes; Scott David; David S Douglass; Pablo Fernandez-Maquieira; Daniel A Friedman; Holly Grimm; Avel Guénin–Carlut; Maria Luiza Iennaco; V Bleu Knight; Alexandra Mikhailova; Ali Rahmjoo; Adeel Razi; Jakub Smékal; Ronen Tamari; Dean Tickles; Alex Vyatkin.
- **Date / venue / status:** 2023-08-19, version `001.1`, Zenodo. The record names *Active Inference Journal*, volume 2023, but classifies the resource as `Other`. Treat as an Institute overview/report deposited in Zenodo; independent peer review is not established.
- **DOI / recommended Read URL:** [10.5281/zenodo.8266281](https://doi.org/10.5281/zenodo.8266281); accessible [versioned record](https://zenodo.org/records/8266281), HTTP 200 with matching title.
- **Evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/8266281), `metadata.creators`, `publication_date`, `resource_type`, `journal`, `doi`, and `version`; all creators have explicit Institute affiliations in that record.
- **Correction:** replace “Daniel Friedman et al.” with “Active Inference Institute et al.” to preserve the deposited lead creator. Keep the 2023 snapshot distinct from the newer v3 below.

### E02. Distributed Science

- **Registered title:** *Distributed Science - The Scientific Process as Multi-Scale Active Inference*.
- **Authors:** Francesco Balzan; John Campbell; Karl Friston; Maxwell James Ramstead; Daniel Friedman; Axel Constant. Crossref spells out Ramstead's given names; the manuscript title page uses Maxwell J. D. Ramstead.
- **Date / venue / status:** posted 2023-10-17; OSF Preprints, version 1. Crossref type `posted-content`, subtype `preprint`. The inspected OSF record has no linked journal DOI; this investigation did not establish a subsequent journal publication.
- **DOI / recommended Read URL:** [10.31219/osf.io/dnw5k](https://doi.org/10.31219/osf.io/dnw5k); [versioned OSF landing page](https://osf.io/dnw5k_v1/), HTTP 200 application shell; [primary PDF](https://osf.io/download/qbejz/), HTTP 200 and successfully extracted.
- **Evidence / affiliation:** [Crossref](https://api.crossref.org/works/10.31219%2Fosf.io%2Fdnw5k), [OSF metadata](https://api.osf.io/v2/preprints/dnw5k/), [file metadata](https://api.osf.io/v2/files/652d815f164d320687a5d9cf/). PDF page 1 explicitly gives Daniel Friedman's affiliation 6 as Active Inference Institute. The [OSF lead-contributor record](https://api.osf.io/v2/users/3wnyx/) confirms Francesco Balzan.
- **Correction:** keep the six-author order and label the link “OSF preprint”. The website's long dash can be typography, but should not obscure the registered subtitle.

### E03. A Variational Synthesis of Evolutionary and Developmental Dynamics

- **Exact title:** *A Variational Synthesis of Evolutionary and Developmental Dynamics*.
- **Authors:** Karl Friston; Daniel A. Friedman; Axel Constant; V. Bleu Knight; Chris Fields; Thomas Parr; John O. Campbell.
- **Date / venue / status:** published 2023-06-21; *Entropy* **25**(7), 964. Published journal article, not merely a preprint. Issue 7 does not change the registered June online publication date.
- **DOI / recommended Read URL:** [10.3390/e25070964](https://doi.org/10.3390/e25070964). Publisher access was blocked during this run; [PMC article](https://pmc.ncbi.nlm.nih.gov/articles/PMC10378262/) is an open repository route, although its HTML reader also intermittently displayed a browser challenge.
- **Evidence / affiliation:** [Crossref](https://api.crossref.org/works/10.3390%2Fe25070964); [publisher-supplied Europe PMC full-text XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10378262/fullTextXML), HTTP 200, with matching title, author list, and explicit Active Inference Institute affiliation 3.
- **Correction:** the website omits **Chris Fields** between Knight and Parr. Restore that author or use an accurate “Friston et al.” abbreviation.

### E04. Generalized Notation Notation for Active Inference Models

- **Exact title:** *Generalized Notation Notation for Active Inference Models*.
- **Authors:** Jakub Smékal; Daniel Ari Friedman.
- **Date / venue / status:** 2023-04-05, version `v1`; Zenodo record names *Active Inference Journal* and classifies it as `Journal article`. This confirms the deposited venue/type, not an independently verified peer-review process.
- **DOI / recommended Read URL:** [10.5281/zenodo.7803328](https://doi.org/10.5281/zenodo.7803328); accessible [versioned record](https://zenodo.org/records/7803328), HTTP 200.
- **Evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/7803328) explicitly affiliates both authors with the Institute. The [Institute repository README](https://github.com/ActiveInferenceInstitute/GeneralizedNotationNotation/blob/main/README.md), citation section, repeats the original 2023 title and venue.
- **Correction:** **retain both occurrences of “Notation”**; the repetition is the verified title, not a typo. Cite the article's version DOI. The repository's project concept DOI `10.5281/zenodo.7803313` is a different identifier and should not silently replace this article version.

### E05. Single-pheromone ant-foraging paper

- **Exact title:** *A single-pheromone model accounts for empirical patterns of ant colony foraging previously modeled using two pheromones*.
- **Authors:** Eric Saund; Daniel Ari Friedman.
- **Date / venue / status:** 2023; *Cognitive Systems Research* **80**, 81–89, August issue. Published journal article.
- **DOI / recommended Read URL:** [10.1016/j.cogsys.2023.02.005](https://doi.org/10.1016/j.cogsys.2023.02.005). The DOI resolves to Elsevier's matching PII `S1389041723000207`; a readable publisher article page was blocked during this run.
- **Accessible full text / evidence:** [author-hosted publisher PDF](https://danielarifriedman.com/papers/2023_SinglePheromone/2023_SinglePheromone.pdf), HTTP 200, first-page extraction successful; [author's paper record](https://danielarifriedman.com/works/Friedman2023SinglePheromoneModelAccounts046.html); [author repository folder](https://github.com/docxology/docxology/tree/main/papers/2023_SinglePheromone); [Crossref](https://api.crossref.org/works/10.1016%2Fj.cogsys.2023.02.005). [Saund's own publication list](https://saund.org/assets/papers-essentials.html) independently confirms the full title, authors, volume, and year.
- **Affiliation:** publisher PDF page 1 explicitly assigns Friedman affiliation c, Active Inference Institute, USA.
- **Correction:** the website truncates the title before “previously modeled using two pheromones”. Restore the full title; preserve the published American spelling “modeled”.

### E06. Active Blockference

- **Exact title:** *Active Blockference: cadCAD with Active Inference for Cognitive Systems Modeling*.
- **Authors:** Jakub Smékal; Arhan Choudhury; Amit Kumar Singh; Shady El Damaty; Daniel Ari Friedman. Crossref splits “Shady El Damaty” into given/family fields differently; use the publisher's displayed full name.
- **Date / venue / status:** first online 2023-03-22; published proceedings chapter in *Active Inference. IWAI 2022*, *Communications in Computer and Information Science* **1721**, 143–150, Springer, Cham. The meeting year is 2022; the publication year is **2023**.
- **DOI / recommended Read URL:** [10.1007/978-3-031-28719-0_10](https://doi.org/10.1007/978-3-031-28719-0_10); [publisher record](https://link.springer.com/chapter/10.1007/978-3-031-28719-0_10), HTTP 200 with title, authors, date, and citation. Metadata is accessible; the full chapter requires access/purchase in the inspected page.
- **Evidence / affiliation:** [Crossref](https://api.crossref.org/works/10.1007%2F978-3-031-28719-0_10); publisher “Authors and Affiliations” explicitly assigns Smékal, Choudhury, Singh, and Friedman to the Institute. The [official IWAI 2022 programme](https://iwaiworkshop.github.io/docs/IWAI_2022_program.pdf) also lists the work as a poster. The [Institute repository](https://github.com/ActiveInferenceInstitute/ActiveBlockference) is supporting software, not a substitute for the chapter citation.
- **Correction:** move to 2023 if the list is organised by publication year; retain “IWAI 2022” in the venue. Use a colon after Blockference.

### E07. Systematic literature analysis

- **Exact title:** *The Free Energy Principle & Active Inference: a Systematic Literature Analysis*.
- **Authors:** Virginia Bleu Knight; RJ Cordes; Daniel Friedman.
- **Date / venue / status:** 2022-12-16, version `v1`; Zenodo. Depositor type is `Journal article`, but the inspected metadata provides **no named journal, volume, issue, or external journal DOI**. Describe as a Zenodo manuscript/literature analysis; an externally published or peer-reviewed journal edition was not established.
- **DOI / recommended Read URL:** [10.5281/zenodo.7449368](https://doi.org/10.5281/zenodo.7449368); accessible [record](https://zenodo.org/records/7449368), HTTP 200.
- **Evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/7449368) explicitly lists Institute affiliations for all three creators and links the [Institute Knowledge-Engineering repository](https://github.com/ActiveInferenceInstitute/Knowledge-Engineering).
- **Correction:** add a repository/manuscript status label. The current repository README cites its **software/data archive** DOI `10.5281/zenodo.7449027`; that is not this manuscript DOI. Do not swap them.

### E08. Active Inference ontology for decentralised science

- **Exact title:** *An Active Inference Ontology for Decentralized Science: from Situated Sensemaking to the Epistemic Commons*.
- **Creators, in record order:** Daniel Friedman; Shaun Applegate-Swanson; Jessica Angeli Balbuena; Arhan Choudhury; RJ Cordes; Shady El Damaty; Avel Guénin—Carlut; V. Bleu Knight; Ivan Metelkin; Siddhant Shrivastava; Amit Kumar Singh; Jakub Smékal; Caleb Tuttle; Alexander Vyatkin. The deposited creator string for Tuttle is the malformed `Tuttle. Caleb`; “Caleb Tuttle” is a presentation normalisation of that string, not an extra author.
- **Date / venue / status:** 2022-12-26, version `3`; Zenodo. Depositor type `Journal article`, but no named external journal or journal DOI is supplied in the inspected metadata. Use “Zenodo manuscript, v3”; external journal publication/peer review is unverified.
- **DOI / recommended Read URL:** [10.5281/zenodo.7484994](https://doi.org/10.5281/zenodo.7484994); accessible [v3 record](https://zenodo.org/records/7484994), HTTP 200.
- **Evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/7484994) explicitly names Institute affiliations for multiple creators, including Friedman. The record links its interactive AEOS companion and describes v3 changes.
- **Correction:** “from Situated Sensemaking to the Epistemic Commons” belongs in the title, not in the author position. Add the authors, abbreviated accurately if needed. Pin the v3 DOI/date together; earlier editions have different identifiers and creator lists.

### E09. Active Inferants

- **Publisher title:** *Active Inferants: An Active Inference Framework for Ant Colony Behavior*.
- **Authors:** Daniel Ari Friedman; Alec Tschantz; Maxwell J. D. Ramstead; Karl Friston; Axel Constant.
- **Date / venue / status:** 2021-06-24; *Frontiers in Behavioral Neuroscience* **15**, 647732. Published journal article.
- **DOI / recommended Read URL:** [10.3389/fnbeh.2021.647732](https://doi.org/10.3389/fnbeh.2021.647732); accessible [publisher full text](https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2021.647732/full), HTTP 200. The existing shorter Frontiers URL also redirects there successfully.
- **Evidence / affiliation:** [Crossref](https://api.crossref.org/works/10.3389%2Ffnbeh.2021.647732) and publisher title/author/affiliation block. Friedman has an explicit **Active Inference Lab** affiliation, the historic wording, rather than an Institute affiliation printed under its later name. The [Institute ActiveInferAnts repository](https://github.com/ActiveInferenceInstitute/ActiveInferAnts) is a related project resource.
- **Correction:** remove “The Basis for” from the title; it is absent from the published title. “Active InferAnts” is a project styling, whereas the publisher and Crossref display “Active Inferants”. Add the authors or “Friedman et al.”

### E10. Thinking like a State: conflated talk and paper

The existing entry combines the title of a Cognitio talk, a single incorrect author credit, and the URL of a differently titled single-author preprint. There are three records to keep distinct:

| Work | Exact source title and author(s) | Date / venue / identifier |
| --- | --- | --- |
| Talk | *Thinking like a State: Active Inference and the Deep Roots of Complex Societies*; Avel Guénin-Carlut, Daniel Friedman, Virginia Bleu Knight | Cognitio, 2021-10-16; [official programme, PDF page 3](https://isc.uqam.ca/wp-content/uploads/sites/40/2021/09/Cognitio2021_Programme.pdf). No talk DOI established. Programme typography/capitalisation normalised here. |
| Preprint identified by the existing OSF URL | *Thinking like a State - Embodied intelligence in the deep history of our collective minds*; Avel GUÉNIN--CARLUT (registered spelling) | 2021-08-22; OSF Preprints; [10.31219/osf.io/dxnzt](https://doi.org/10.31219/osf.io/dxnzt). |
| Linked published proceedings article | *Thinking like a State : Embodied intelligence in the deep history of our collective mind*; Avel Guénin—Carlut | 2022-10-01; *IOP Conference Series: Materials Science and Engineering* **1261**(1), 012026; [10.1088/1757-899X/1261/1/012026](https://doi.org/10.1088/1757-899X/1261/1/012026). |

- **Evidence:** [preprint Crossref](https://api.crossref.org/works/10.31219%2Fosf.io%2Fdxnzt), [OSF metadata](https://api.osf.io/v2/preprints/dxnzt/), [proceedings Crossref](https://api.crossref.org/works/10.1088%2F1757-899X%2F1261%2F1%2F012026). OSF explicitly links the IOP publication DOI; the [author's own bibliography](https://avel.kairos-research.org/research/) confirms the published edition.
- **Accessible canonical repository route:** [OSF version 1](https://osf.io/dxnzt_v1/), HTTP 200 application shell; [OSF PDF](https://osf.io/download/pnry5/), HTTP 200 and successfully extracted. The PDF title page uses singular “mind”, while the preprint registration uses plural “minds”. Preserve the version-specific distinction.
- **Affiliation:** the preprint title page explicitly says “Kairos Research / Active Inference Lab”. Do not backdate the author's current Institute role as if it were the printed affiliation of every edition.
- **Recommendation:** for a publication list, replace the mixed entry with the correctly titled, single-author **2022 proceedings article**, retaining an “open preprint” link to OSF. If retaining a 2021 talk, cite all three programme authors and link its programme; do not present `dxnzt` as the exact talk record. IOP full-text accessibility was not verified in this run.

### E11. First symposium transcript

- **Exact title:** *Transcript of: Karl Friston, 1st Applied Active Inference Symposium, Active Inference Lab, June 21, 2021*.
- **Creators:** Karl Friston; David Standish Douglass; Maria Luiza Iennaco de Vasconcelos; Stephen Sillett; Lorena Sganzerla; Dean Tickles; Ivan Metelkin; Alex Vyatkin; Daniel Ari Friedman.
- **Date / venue / status:** deposited 2021-12-21, version `v1.0`; Zenodo, resource type `Other`. This is an edited symposium transcript, not a journal research article. The event occurred 2021-06-21; the deposit date is different.
- **DOI / recommended Read URL:** [10.5281/zenodo.5797041](https://doi.org/10.5281/zenodo.5797041); accessible [record](https://zenodo.org/records/5797041), HTTP 200 by direct GET. The old `/record/5797041` link still redirects to `/records/5797041`; it is not a dead link.
- **Evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/5797041) supplies all nine creators, dates, version, and type, and explicitly describes the Active Inference Lab symposium. Creator affiliations use **ActInfLab**; retain that historic attribution.
- **Correction:** credit the transcript's full creator group or “Friston et al.” and label it “edited transcript”. Do not describe Friston as its only creator.

### E12. Active Inference & Behavior Engineering for Teams

- **Exact title:** *Active Inference & Behavior Engineering for Teams*.
- **Creators:** Alexander Vyatkin; Ivan Metelkin; Alexandra Mikhailova; RJ Cordes; Daniel Ari Friedman.
- **Date / venue / status:** 2020-09-09, version `1`; Zenodo **preprint**. Separately, the [official IWAI 2021 programme](https://iwaiworkshop.github.io/2021.html), “Accepted posters”, lists this title and the same five authors for the workshop on 2021-09-13.
- **DOI / recommended Read URL:** [10.5281/zenodo.4021163](https://doi.org/10.5281/zenodo.4021163); accessible [record](https://zenodo.org/records/4021163), HTTP 200. The old singular `/record/4021163` redirects successfully to this plural path.
- **Evidence / affiliation limit:** [Zenodo API](https://zenodo.org/api/records/4021163) supplies the exact title, authors, date, and preprint type, but its creator affiliation fields are null. This check does **not** establish Institute affiliation at the time of the 2020 deposit. A current author's Institute association is insufficient to fill those fields retrospectively.
- **Correction:** label the 2020 entry “Zenodo preprint”; the website's “Poster at IWAI 2020” is unsupported and conflicts with the verified **2021** poster listing. If discussing the poster, use 2021 and cite the official programme. Preserve “Behavior” in the quoted published title despite UK spelling elsewhere on the site.

## Three newer, explicitly Institute-affiliated candidates

These are a bounded selection, not a claim to be the newest or complete Institute bibliography. Each has direct affiliation evidence in the publication or repository record.

### N01. Federated inference and belief sharing

- **Exact title:** *Federated inference and belief sharing*.
- **Authors:** Karl J. Friston; Thomas Parr; Conor Heins; Axel Constant; Daniel Friedman; Takuya Isomura; Chris Fields; Tim Verbelen; Maxwell Ramstead; John Clippinger; Christopher D. Frith.
- **Year / venue / status:** **2024**; *Neuroscience & Biobehavioral Reviews* **156**, 105500; published journal article. Crossref and the publisher-supplied archive give January 2024 as the issue date; the DOI's embedded `2023` is not the issue year.
- **DOI / recommended link:** [10.1016/j.neubiorev.2023.105500](https://doi.org/10.1016/j.neubiorev.2023.105500); [open archived article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11139662/); [UCL repository record](https://discovery.ucl.ac.uk/id/eprint/10183657/).
- **Primary evidence / access:** [Crossref](https://api.crossref.org/works/10.1016%2Fj.neubiorev.2023.105500); [publisher-supplied Europe PMC XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11139662/fullTextXML), HTTP 200. Daniel Friedman is explicitly linked to affiliation h, Active Inference Institute, Davis, CA, USA. Elsevier DOI resolution returned a redirect page; use the open archive as an additional reading link.
- **Usefulness:** adds a published computational treatment of communication and shared beliefs to the site's collective-inference theme. Avoid presenting its simulated agents as empirical proof about human communities.

### N02. Shared Protentions in Multi-Agent Active Inference

- **Exact title:** *Shared Protentions in Multi-Agent Active Inference*.
- **Authors:** Mahault Albarracin; Riddhi J. Pitliya; Toby St. Clere Smithe; Daniel Ari Friedman; Karl Friston; Maxwell J. D. Ramstead.
- **Year / venue / status:** published 2024-03-29; *Entropy* **26**(4), 303. Published journal article, distinct from the earlier Preprints.org version.
- **DOI / recommended link:** [10.3390/e26040303](https://doi.org/10.3390/e26040303); [open archived article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11049075/).
- **Primary evidence / access:** [Crossref](https://api.crossref.org/works/10.3390%2Fe26040303); [publisher-supplied Europe PMC XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11049075/fullTextXML), HTTP 200. Daniel Ari Friedman is explicitly linked to affiliation 5, Active Inference Institute, Davis, CA, USA. MDPI blocked the automated landing-page requests; the archive supplied full text and publication metadata.
- **Usefulness:** adds theoretical work connecting collective goals, phenomenology, and mathematical modelling. Describe it as a theoretical formulation rather than demonstrated real-world coordination performance.

### N03. Updated Institute and ecosystem overview

- **Exact title:** *The Active Inference Institute & Active Inference Ecosystem*.
- **Creators, in record order:** Active Inference Institute; Alex Vyatkin; Alexandra Mikhailova; Andrea Hiott; Andrew Pashea; Ben Elers; Bert Berkers; Bleu Knight; Chris Fields; Dan Whittet; Daniel Friedman; Déan Ticklẽs; Fraser Paterson; Gareth Stubbs; Holly Grimm; Jakub Smekal; Jeremy Cooper; John Boik; Libor Burian; Mahault Albarracin; Maria Luiza Iennaco; Matthew Brown; Mick Thacker; Peter Gilli; Rafael Kaufmann; RJ Cordes; Ryan Henry; Sandeep Ramesh; Scott David; Sebastian Alvarado; Zach Baker.
- **Date / venue / status:** 2025-12-18, version `v3`; Zenodo. Metadata names *Active Inference Journal* and resource type `Publication`; this is an organisational overview, with no independent peer-review verification in this investigation.
- **DOI / recommended link:** [10.5281/zenodo.17982447](https://doi.org/10.5281/zenodo.17982447); accessible [versioned record](https://zenodo.org/records/17982447), HTTP 200 with matching title.
- **Primary evidence / affiliation:** [Zenodo API](https://zenodo.org/api/records/17982447), including explicit Institute creator and multiple Institute-affiliated contributors. Names above retain this record's spellings, including “Smekal” and “Ticklẽs”, rather than silently borrowing spellings from another version.
- **Usefulness:** updates the 2023 organisational snapshot. Label “Institute overview, v3 (2025)” and retain the old snapshot as historical if needed; do not imply that the ampersand title, date, DOI, and creator list are identical across editions.

## Verified fellowship and programme destinations

Direct GETs reproduced **HTTP 404** and GitHub Pages' “File not found” content for both old routes, `https://activeinference.org/fellowships` and `https://activeinference.org/research`. The [existing static research page](https://activeinference.org/pages/research.html) returned HTTP 200. These observations distinguish the broken extensionless paths from the working static page. Failed destinations are recorded as code rather than offered as navigable documentation links.

| Existing use | Recommended URL | Evidence and wording |
| --- | --- | --- |
| Research Fellowships “Apply” | [Fellowship programme](https://activeinference.institute/programs/fellowship/) | HTTP 200; matching title and canonical URL. “Application Requirements” and “How to Become a Fellow” describe the current process. Use “Fellowship details” or “Application requirements” rather than implying a direct submission form. |
| Prepare & Measure “Learn more” | [Project Preparation](https://activeinference.institute/prepare/) and [Project Measurement](https://activeinference.institute/measure/) | Both HTTP 200 with substantive programme pages. They explain the two stages and link their respective forms. Use the programme pages as stable explanatory destinations. |
| General research/programme CTA | [ReInference Unit](https://activeinference.institute/reinference/) | HTTP 200, heading “ReInference Unit”; identifies the Institute's research-focused organisational unit. Suitable wording: “Explore research projects”. |
| Broad learning/research resources | [Learning and Research](https://activeinference.institute/learning/) | HTTP 200 with matching title/canonical URL. The `.institute/research/` page is a “Page moved” page pointing here, so prefer this final destination. |
| The sentence promising a “full list” of publications | Remove the completeness promise; optionally link [research resources](https://activeinference.institute/resources/#research) as resources | Resources page returned HTTP 200 and the site's own navigation links its research fragment. This investigation did not establish a complete Institute-affiliated publication register. Neither a projects page nor a broad bibliography is automatically such a register. |
| Publication “Read” links | Each individual DOI/versioned record above | A programme page cannot substitute for a publication's source record. |

The Fellowship page explicitly states that the Research Fellow role is unpaid and non-employee and describes application requirements; the present static card's broad “all career stages” language should not be expanded into a promise of eligibility, funding, or acceptance. The Prepare and Measure pages link official form shortlinks, but no form was submitted and submission functionality was not tested.

## Remaining boundaries

- The exact existing State entry is not verified as a single work: use the separate talk, preprint, and publication records above.
- External journal publication/peer review was not established for the ontology or literature-analysis Zenodo manuscripts. GNN and the Institute overviews carry *Active Inference Journal* metadata, which should be reported without upgrading it into an independent peer-review claim.
- The 2020 Teams deposit has no creator affiliations in its record. Its 2021 poster listing is verified; an IWAI 2020 presentation is not.
- Publisher access restrictions, OSF application shells, and intermittent PMC browser challenges are reported separately from bibliographic verification. Repository/API access is verified where stated; universal browser or full-text accessibility is not.
- No website, shared component, repository history, programme form, or publication record was modified. Only this source brief was created.

## Website integration and related corrections

The website implementation accompanying this brief uses all 12 original works with the edition/status corrections above, plus N01–N03, grouped by publication type. The State entry cites the 2022 proceedings edition with its earlier preprint offered separately. The 2023 and 2025 Institute overviews remain distinct records. Historical affiliations are described as Institute-contributor, earlier Lab, and ecosystem work rather than retrospectively asserting Institute affiliation for every publication.

- The [MIT Press record for *Fundamentals of Active Inference*](https://mitpress.mit.edu/9780262050951/fundamentals-of-active-inference/) states **17 March 2026**, ISBN 9780262050951, by Sanjeev V. Namjoshi. This corrects the previous 2025 date in the education page and README. The publisher web reader returned the title, author, date, and ISBN; direct automated requests returned 403, which is an access restriction rather than a missing book.
- The README's distinction between variational free energy and surprisal is supported by the “Active inference and variational free energy” formulation, Equation 1, in the primary methods paper [*Generalised free energy and active inference*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6848054/). Its [publisher-supplied XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6848054/fullTextXML) returned HTTP 200 with the matching title and explicit upper-bound statement when the PMC reader showed a browser challenge. The README avoids treating the two quantities as synonyms or presenting every simulation as empirical evidence. The textbooks remain further reading rather than a claim that their full contents were inspected in this pass.
- Direct GETs returned HTTP 200 with matching page titles for [Internship](https://activeinference.institute/programs/internship/), [Project Preparation](https://activeinference.institute/prepare/), and [Project Measurement](https://activeinference.institute/measure/). The old `.org/courses` and `.org/internship` routes returned 404. The education page now points to the recorded-learning channel and current internship/fellowship pages.
- The [official IWAI 2026 site](https://iwaiworkshop.github.io/) lists Madrid, **14–16 October 2026**, and the foundations theme. The research page therefore describes that dated event in the past tense. The [symposium project page](https://activeinference.institute/projects/symposium/) is the final HTTP 200 destination of the symposium subdomain and replaces an unverified “planning underway” claim.
- Public repository records were checked with `gh-axi repo list ActiveInferenceInstitute --limit 150 --visibility public`. Direct project links now point to [the ontology](https://github.com/ActiveInferenceInstitute/Active_Inference_Ontology), [GNN](https://github.com/ActiveInferenceInstitute/Generalized_Notation_Notation), and [the 2021 ant-paper code](https://github.com/ActiveInferenceInstitute/ants). Repository descriptions establish resource identity, not scientific validity or universal reproducibility.
- Two advisory-board profile links were repaired: [Alexander Ororbia's university page](https://www.cs.rit.edu/~ago/) links to [his current Scholar profile](https://scholar.google.com/citations?user=qQRkt9QAAAAJ&hl=en), which returned HTTP 200 and the title “Alexander G. Ororbia - Google Scholar”; the old profile identifier returned 404. [Noumenal's homepage](https://noumenal.ai/) returned HTTP 200 with matching organisation identity, replacing its missing `/team` route.

## Follow-up: remaining profile links

Rechecked on **2026-10-21** after the initial review. The three remaining broken destinations were reproduced before editing:

| Profile | Failed destination and evidence | Resolution |
| --- | --- | --- |
| Austin Cook | `https://www.alignmentlab.ai/` returned HTTP 404, title “404 - Page not found”. | Link to [Alignment Lab AI on GitHub](https://github.com/Alignment-Lab-AI), HTTP 200 with matching title and organisation description. The profile itself names Alignment Lab AI and lists the former website, establishing the connection. Label the destination as GitHub rather than a company homepage. |
| V. Bleu Knight | `https://www.bleuknight.com/` failed DNS resolution with `ENOTFOUND`. | Remove the unavailable personal-site link and retain [the existing Scholar profile](https://scholar.google.com/citations?user=dlmnexcAAAAJ&hl=en), HTTP 200, title “V. Bleu Knight - Google Scholar”. No replacement personal domain was inferred. |
| Karl Friston | `https://www.verses.ai` returned HTTP 404, title “Not Found”. | Remove the unavailable company link and retain the existing UCL and Scholar references. This is a navigation correction, not a change to his biography or a claim about current company affiliation. |

Knight's biography now describes the systematic literature analysis as a Zenodo manuscript, consistent with E07, rather than including it in a blanket peer-review claim. The existing journal article remains identified by its title.

Automated LinkedIn requests returned 999, Medium returned 403, and the direct UCL Karl Friston page request timed out in the initial review and follow-up. These are access limits, not proof of removed profiles. The [UCL-hosted publication page](https://www.fil.ion.ucl.ac.uk/~karl/) was readable through the web reader with matching name and publication content, so it is retained. Publisher access limits are documented above. Completed tasks are removed from `TO-DO.md`; these observations remain here as evidence, not outstanding work.
