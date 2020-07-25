import graphene
from graphene_django import DjangoObjectType
from pkdx_backend.models import Pokemon


class PokemonType(DjangoObjectType):
    class Meta:
        model = Pokemon
        fields = ('id', 'name', 'description', 'type1', 'type2')


class Query(graphene.ObjectType):
    pokemons = graphene.List(PokemonType, starts_with=graphene.String())
    pokemon = graphene.Field(
        PokemonType,
        id=graphene.Int(),
        name=graphene.String()
    )

    # We will probably add some stuff to get specifics
    def resolve_pokemons(self, info, **kwargs):
        # pylint: disable=no-member
        starts_with = kwargs.get('starts_with')
        if (starts_with):
            return Pokemon.objects.filter(name__istartswith=starts_with)
        return Pokemon.objects.all()

    def resolve_pokemon(self, info, **kwargs):
        # pylint: disable=no-member
        id = kwargs.get('id')
        name = kwargs.get('name')
        if id is not None:
            return Pokemon.objects.get(pk=id)
        if name is not None:
            return Pokemon.objects.get(name__iexact=name)
        return None


schema = graphene.Schema(query=Query)
