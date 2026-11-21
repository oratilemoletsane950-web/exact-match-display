<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Commit authorship

GitHub credits every author and co-author identity it finds, so this repository
must show only its owner as a contributor.

- Set the author **and** committer to
  `Oratile Moletsane <sebatamoletsane950@gmail.com>` on every commit. The shared
  Git config defaults to an agent identity (`Buffy <agent@freebuff.local>`), so
  override it for the commit:
  `git -c user.name="Oratile Moletsane" -c user.email="sebatamoletsane950@gmail.com" commit ...`
- Never attribute a commit to an agent, tool or product. No `Co-Authored-By`
  trailer, no `Generated with …` footer, and no agent name in the author,
  committer or message. The owner has explicitly declined AI attribution, so
  the Codebuff footer must not be added.
